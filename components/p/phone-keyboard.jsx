import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kte9t6b2p.css';
import '../../css/c/cb977fdem.css';
import '../../css/k/k2nqfohtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kte9t6b2p"/><path class="cb977fdem"/><path class="k2nqfohtx"/></g>`,
		"fallback": "andrsrxn:phone-keyboard",
	});
}

export default Component;
