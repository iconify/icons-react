import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocmghj2nz.css';
import '../../css/o/o9xqnw6dm.css';
import '../../css/q/qh7qxgsvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocmghj2nz"/><path clip-rule="evenodd" class="o9xqnw6dm"/><path class="qh7qxgsvv"/></g>`,
		"fallback": "andrsrxn:screen-share-lock",
	});
}

export default Component;
