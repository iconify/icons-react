import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vin9m7baj.css';
import '../../css/l/ljbbq6okp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vin9m7baj"/><path class="ljbbq6okp"/></g>`,
		"fallback": "andrsrxn:screen-contract-horizontally",
	});
}

export default Component;
