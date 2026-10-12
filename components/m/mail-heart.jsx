import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxx7xlcnt.css';
import '../../css/q/qf2bm2bmv.css';
import '../../css/q/q6ex2lbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yxx7xlcnt"/><path class="qf2bm2bmv"/><path class="q6ex2lbku"/></g>`,
		"fallback": "andrsrxn:mail-heart",
	});
}

export default Component;
