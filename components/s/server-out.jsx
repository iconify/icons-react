import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9vce2tdy.css';
import '../../css/o/oq5dh1_ib.css';
import '../../css/o/o01iqbc4j.css';
import '../../css/i/izb20nb-l.css';
import '../../css/q/q-gyfnbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j9vce2tdy"/><path class="oq5dh1_ib"/><path class="o01iqbc4j"/><path class="izb20nb-l"/><path class="q-gyfnbvr"/></g>`,
		"fallback": "andrsrxn:server-out",
	});
}

export default Component;
