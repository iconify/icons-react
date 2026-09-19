import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r-o1j3bot.css';
import '../../css/u/uo35begrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r-o1j3bot"/><path class="uo35begrj"/></g>`,
		"fallback": "hugeicons:solar-panel-05",
	});
}

export default Component;
