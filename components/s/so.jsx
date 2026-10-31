import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ug4ve3gnj.css';
import '../../css/f/f6-d95u-p.css';

const viewBox = {"width":300,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ug4ve3gnj"/><path class="f6-d95u-p"/></g>`,
		"fallback": "cif:so",
	});
}

export default Component;
