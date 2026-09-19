import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xi7esbcle.css';
import '../../css/p/pimqc2bvo.css';
import '../../css/e/ehv-evg_q.css';
import '../../css/o/oqynatbcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xi7esbcle"/><path class="pimqc2bvo"/><circle class="ehv-evg_q"/><circle class="oqynatbcn"/></g>`,
		"fallback": "icon-park-solid:peas",
	});
}

export default Component;
