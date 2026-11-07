import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wx3w54b6k.css';
import '../../css/g/gj2jcwcoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wx3w54b6k"/><path class="gj2jcwcoe"/></g>`,
		"fallback": "solar:multiple-forward-left-line-duotone",
	});
}

export default Component;
