import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s19aowben.css';
import '../../css/f/f6p-2g58b.css';
import '../../css/o/o8ymreppw.css';
import '../../css/h/hjhjwb4fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s19aowben"/><path class="f6p-2g58b"/><path class="o8ymreppw"/><path class="hjhjwb4fd"/></g>`,
		"fallback": "solar:list-arrow-up-minimalistic-line-duotone",
	});
}

export default Component;
