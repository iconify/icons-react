import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1um8mmqv.css';
import '../../css/o/odpzgc07y.css';
import '../../css/s/sak3crbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f1um8mmqv"/><path class="odpzgc07y"/><path class="sak3crbdb"/></g>`,
		"fallback": "andrsrxn:iso",
	});
}

export default Component;
