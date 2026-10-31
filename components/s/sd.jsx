import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oymxiccca.css';
import '../../css/b/bc4gh5bbk.css';
import '../../css/w/w8lft_h8f.css';
import '../../css/j/jxpk3fbzd.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oymxiccca"/><path class="bc4gh5bbk"/><path class="w8lft_h8f"/><path class="jxpk3fbzd"/></g>`,
		"fallback": "cif:sd",
	});
}

export default Component;
