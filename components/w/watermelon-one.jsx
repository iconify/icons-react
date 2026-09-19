import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2e-8bc0c.css';
import '../../css/u/uhqhq27pq.css';
import '../../css/i/ik49rhdyl.css';
import '../../css/c/cop2n7yfn.css';
import '../../css/a/a5n0hsbmv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k2e-8bc0c"/><circle class="uhqhq27pq"/><circle class="ik49rhdyl"/><circle class="cop2n7yfn"/><path class="a5n0hsbmv"/></g>`,
		"fallback": "icon-park-outline:watermelon-one",
	});
}

export default Component;
