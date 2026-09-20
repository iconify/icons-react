import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jux0sgb4d.css';
import '../../css/i/i3h_fy-ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jux0sgb4d"/><path class="i3h_fy-ls"/>`,
		"fallback": "lineicons:power-button",
	});
}

export default Component;
