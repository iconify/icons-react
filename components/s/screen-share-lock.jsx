import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocmghj2nz.css';
import '../../css/q/qcte_gbfn.css';
import '../../css/v/v0f1cbbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocmghj2nz"/><path clip-rule="evenodd" class="qcte_gbfn"/><path class="v0f1cbbgj"/></g>`,
		"fallback": "andrsrxn:screen-share-lock",
	});
}

export default Component;
