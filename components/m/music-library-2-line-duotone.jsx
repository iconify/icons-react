import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h477q4bel.css';
import '../../css/j/je9pe87ui.css';
import '../../css/y/yh6hz8b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h477q4bel"/><path class="je9pe87ui"/><path class="yh6hz8b9k"/></g>`,
		"fallback": "solar:music-library-2-line-duotone",
	});
}

export default Component;
