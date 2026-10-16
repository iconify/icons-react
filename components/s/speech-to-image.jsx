import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vcwnokb_q.css';
import '../../css/f/fmapwp6bo.css';
import '../../css/l/l5ko85bai.css';
import '../../css/f/f6mprlhcu.css';
import '../../css/t/tq1xz-bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vcwnokb_q"/><path class="fmapwp6bo"/><path class="l5ko85bai"/><path class="f6mprlhcu"/><path class="tq1xz-bas"/></g>`,
		"fallback": "andrsrxn:speech-to-image",
	});
}

export default Component;
