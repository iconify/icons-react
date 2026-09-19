import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jywje-bzf.css';
import '../../css/y/y_qtl8xnq.css';
import '../../css/l/luqh47b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jywje-bzf"/><path class="y_qtl8xnq"/><path class="luqh47b4m"/></g>`,
		"fallback": "hugeicons:product-loading",
	});
}

export default Component;
