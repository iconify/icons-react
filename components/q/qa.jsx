import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdn3w-fqv.css';
import '../../css/w/wtbr_yb4p.css';

const viewBox = {"width":301,"height":119};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fdn3w-fqv"/><path class="wtbr_yb4p"/></g>`,
		"fallback": "cif:qa",
	});
}

export default Component;
