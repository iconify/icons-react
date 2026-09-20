import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw4t0zb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yw4t0zb6g"/>`,
		"fallback": "streamline-sharp:phone-pen-2-solid",
	});
}

export default Component;
