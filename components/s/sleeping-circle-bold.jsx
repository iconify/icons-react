import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z-qx8oiyr.css';
import '../../css/d/d5z3cdcxv.css';
import '../../css/s/skfy649an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z-qx8oiyr"/><path class="d5z3cdcxv"/><path class="skfy649an"/></g>`,
		"fallback": "solar:sleeping-circle-bold",
	});
}

export default Component;
