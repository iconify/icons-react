import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0ux_1vag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0ux_1vag"/>`,
		"fallback": "iconamoon:menu-kebab-vertical-bold",
	});
}

export default Component;
