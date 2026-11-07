import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f3p-g4m6q.css';
import '../../css/s/smcsc6bgv.css';
import '../../css/q/q661scbjc.css';
import '../../css/b/bkya-ccdx.css';
import '../../css/h/hpzuy57gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f3p-g4m6q"/><path class="smcsc6bgv"/><path class="q661scbjc"/><path class="bkya-ccdx"/><path class="hpzuy57gm"/></g>`,
		"fallback": "solar:jar-of-pills-broken",
	});
}

export default Component;
