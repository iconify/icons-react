import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0dnrlbyk.css';
import '../../css/z/zm31xdjdj.css';
import '../../css/o/ojo7plb8y.css';
import '../../css/y/yq3p28b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t0dnrlbyk"/><path clip-rule="evenodd" class="zm31xdjdj"/><path class="ojo7plb8y"/><path class="yq3p28b3j"/></g>`,
		"fallback": "andrsrxn:lasso-cursor",
	});
}

export default Component;
