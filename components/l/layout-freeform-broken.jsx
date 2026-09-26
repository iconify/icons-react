import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nivfk3byh.css';
import '../../css/z/z973_4vww.css';
import '../../css/b/bwph_-bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nivfk3byh"/><path class="z973_4vww"/><path class="bwph_-bud"/></g>`,
		"fallback": "solar:layout-freeform-broken",
	});
}

export default Component;
