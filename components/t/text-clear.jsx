import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dm4x1bp9i.css';
import '../../css/y/yy7qddc7s.css';
import '../../css/c/cuunliqrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dm4x1bp9i"/><path class="yy7qddc7s"/><path class="cuunliqrg"/></g>`,
		"fallback": "hugeicons:text-clear",
	});
}

export default Component;
