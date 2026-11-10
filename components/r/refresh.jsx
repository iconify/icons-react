import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq3nvob2j.css';
import '../../css/k/klwjdcbgj.css';
import '../../css/q/q-fnl-bqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="wq3nvob2j"/><path class="klwjdcbgj"/><path class="q-fnl-bqx"/></g>`,
		"fallback": "andrsrxn:refresh",
	});
}

export default Component;
