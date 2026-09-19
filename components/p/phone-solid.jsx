import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4fn3vt9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z4fn3vt9b"/>`,
		"fallback": "iconoir:phone-solid",
	});
}

export default Component;
