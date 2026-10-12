import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0ultzb9t.css';
import '../../css/l/lvxugcc_h.css';
import '../../css/k/k-3_lubzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(45 10.51 3.56)" class="t0ultzb9t"/><path class="lvxugcc_h"/><path class="k-3_lubzl"/></g>`,
		"fallback": "andrsrxn:paintbrush",
	});
}

export default Component;
