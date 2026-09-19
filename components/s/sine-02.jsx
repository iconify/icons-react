import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-dl_c5mw.css';
import '../../css/l/lng8fzbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j-dl_c5mw"/><path class="lng8fzbry"/></g>`,
		"fallback": "hugeicons:sine-02",
	});
}

export default Component;
