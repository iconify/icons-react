import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qavqpjbpl.css';
import '../../css/m/mdiuojfnf.css';
import '../../css/g/g92_1ls8c.css';
import '../../css/q/q-d3abbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qavqpjbpl"/><path class="mdiuojfnf"/><path class="g92_1ls8c"/><path class="q-d3abbgr"/></g>`,
		"fallback": "solar:move-vertical-broken",
	});
}

export default Component;
