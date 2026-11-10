import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esdpq_hhl.css';
import '../../css/g/gbt4wjbiy.css';
import '../../css/k/kz957bcgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="esdpq_hhl"/><path class="gbt4wjbiy"/><path clip-rule="evenodd" class="kz957bcgs"/></g>`,
		"fallback": "andrsrxn:sparkle-scan",
	});
}

export default Component;
