import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb4ow_bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bb4ow_bno"/>`,
		"fallback": "streamline-sharp:sizing-solid",
	});
}

export default Component;
