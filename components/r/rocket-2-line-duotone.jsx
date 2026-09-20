import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qj2-a9byh.css';
import '../../css/l/l40gmibpr.css';
import '../../css/c/ck_1iolbp.css';
import '../../css/j/j50gegbkk.css';
import '../../css/o/ohbg_acuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qj2-a9byh"/><path class="l40gmibpr"/><path class="ck_1iolbp"/><path class="j50gegbkk"/><path class="ohbg_acuv"/></g>`,
		"fallback": "solar:rocket-2-line-duotone",
	});
}

export default Component;
