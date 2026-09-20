import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucde5db9d.css';
import '../../css/s/smgf3k94c.css';
import '../../css/q/q5gq_053m.css';
import '../../css/h/hworh_bur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ucde5db9d"/><path class="smgf3k94c"/><path class="q5gq_053m"/><path class="hworh_bur"/></g>`,
		"fallback": "streamline-flex-color:monitor-error",
	});
}

export default Component;
