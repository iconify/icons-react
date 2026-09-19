import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gkau37bfn.css';
import '../../css/t/tu0pn-bxd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="gkau37bfn"/><path class="tu0pn-bxd"/></g>`,
		"fallback": "cryptocurrency-color:smart",
	});
}

export default Component;
