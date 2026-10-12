import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/piyvq7btz.css';
import '../../css/o/o_lslbkqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="piyvq7btz"/><path class="o_lslbkqe"/></g>`,
		"fallback": "andrsrxn:receipt",
	});
}

export default Component;
