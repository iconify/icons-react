import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrepq8k1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrepq8k1b"/>`,
		"fallback": "iconamoon:menu-burger-vertical-bold",
	});
}

export default Component;
