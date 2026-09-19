import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snthn3bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snthn3bsy"/>`,
		"fallback": "iconamoon:menu-kebab-vertical",
	});
}

export default Component;
