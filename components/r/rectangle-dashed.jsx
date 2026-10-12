import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pt03xf-3v.css';
import '../../css/p/pbrgif0fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.2 19.22)" class="pt03xf-3v"/><path class="pbrgif0fv"/></g>`,
		"fallback": "andrsrxn:rectangle-dashed",
	});
}

export default Component;
