import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f3p-g4m6q.css';
import '../../css/s/smcsc6bgv.css';
import '../../css/i/iyts3fg-w.css';
import '../../css/u/untnup1qs.css';
import '../../css/h/hpzuy57gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f3p-g4m6q"/><path class="smcsc6bgv"/><path class="iyts3fg-w"/><path class="untnup1qs"/><path class="hpzuy57gm"/></g>`,
		"fallback": "solar:jar-of-pills-linear",
	});
}

export default Component;
