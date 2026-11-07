import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/feqt5rzvl.css';
import '../../css/a/akyqa1bwb.css';
import '../../css/u/ungesnbtm.css';
import '../../css/n/n_r18s3xt.css';
import '../../css/t/th34jmter.css';
import '../../css/m/mw5i2qouq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="feqt5rzvl"/><path class="akyqa1bwb"/><path class="ungesnbtm"/><path class="n_r18s3xt"/><path class="th34jmter"/><path class="mw5i2qouq"/></g>`,
		"fallback": "solar:smartphone-rotate-orientation-linear",
	});
}

export default Component;
