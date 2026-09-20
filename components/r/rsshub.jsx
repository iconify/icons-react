import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e-90k-bvr.css';
import '../../css/z/zwo4g4brh.css';
import '../../css/p/p_1g6h24p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="e-90k-bvr"/><circle class="zwo4g4brh"/><rect class="p_1g6h24p"/></g>`,
		"fallback": "thesvg:rsshub",
	});
}

export default Component;
