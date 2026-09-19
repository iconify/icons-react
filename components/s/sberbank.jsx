import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z3-qp0biq.css';
import '../../css/p/p_clcztzl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="z3-qp0biq"/><path class="p_clcztzl"/></g>`,
		"fallback": "cryptocurrency-color:sberbank",
	});
}

export default Component;
