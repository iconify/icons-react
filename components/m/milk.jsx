import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tnb770uwa.css';
import '../../css/l/lq4a2bctv.css';
import '../../css/y/ynugbvbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tnb770uwa"/><path class="lq4a2bctv"/><path class="ynugbvbac"/></g>`,
		"fallback": "andrsrxn:milk",
	});
}

export default Component;
