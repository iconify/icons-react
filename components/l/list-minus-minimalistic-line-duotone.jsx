import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ynnqgt8sp.css';
import '../../css/t/toja6_c9f.css';
import '../../css/q/q9lv46bbv.css';
import '../../css/g/glpogpcqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ynnqgt8sp"/><path class="toja6_c9f"/><path class="q9lv46bbv"/><path class="glpogpcqk"/></g>`,
		"fallback": "solar:list-minus-minimalistic-line-duotone",
	});
}

export default Component;
