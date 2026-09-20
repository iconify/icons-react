import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i8utatbio.css';
import '../../css/v/vepd3ytoq.css';
import '../../css/u/un-u7xpwr.css';
import '../../css/q/qpmqs1x2s.css';
import '../../css/l/lg_7281ce.css';
import '../../css/i/i-375ubnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i8utatbio"/><path class="vepd3ytoq"/><path class="un-u7xpwr"/><path class="qpmqs1x2s"/><path class="lg_7281ce"/><path class="i-375ubnr"/></g>`,
		"fallback": "solar:object-scan-line-duotone",
	});
}

export default Component;
