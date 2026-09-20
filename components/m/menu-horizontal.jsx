import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uotk91dww.css';
import '../../css/p/pytfwacmq.css';
import '../../css/t/tzk3rsaex.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><circle class="uotk91dww"/><circle class="pytfwacmq"/><circle class="tzk3rsaex"/></g>`,
		"fallback": "system-uicons:menu-horizontal",
	});
}

export default Component;
