import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/ha7ctcc-i.css';
import '../../css/w/wji1psbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ha7ctcc-i"/><path class="wji1psbyz"/></g>`,
		"fallback": "solar:lightbulb-minimalistic-line-duotone",
	});
}

export default Component;
