import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u-9worbty.css';
import '../../css/h/h6vuss_eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u-9worbty"/><path class="h6vuss_eu"/></g>`,
		"fallback": "iconoir:thumbs-up",
	});
}

export default Component;
