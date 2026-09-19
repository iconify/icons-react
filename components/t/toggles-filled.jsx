import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y75ybwfrp.css';
import '../../css/w/wmxza4_8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y75ybwfrp"/><path class="wmxza4_8x"/>`,
		"fallback": "boxicons:toggles-filled",
	});
}

export default Component;
