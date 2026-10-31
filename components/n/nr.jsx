import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6tzp73jv.css';
import '../../css/u/ude4r2bti.css';
import '../../css/p/py-dpkvzj.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6tzp73jv"/><path class="ude4r2bti"/><path class="py-dpkvzj"/></g>`,
		"fallback": "cif:nr",
	});
}

export default Component;
