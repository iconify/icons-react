import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kruqtab-m.css';
import '../../css/i/i8utatbio.css';
import '../../css/v/vepd3ytoq.css';
import '../../css/u/un-u7xpwr.css';
import '../../css/q/qpmqs1x2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kruqtab-m"/><path class="i8utatbio"/><path class="vepd3ytoq"/><path class="un-u7xpwr"/><path class="qpmqs1x2s"/></g>`,
		"fallback": "solar:scanner-2-line-duotone",
	});
}

export default Component;
