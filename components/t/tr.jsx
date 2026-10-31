import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2zjz-bfb.css';
import '../../css/t/tfz96s17u.css';
import '../../css/m/m4h9f1bjh.css';
import '../../css/v/v58qiyd7m.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x2zjz-bfb"/><circle class="tfz96s17u"/><circle class="m4h9f1bjh"/><path class="v58qiyd7m"/></g>`,
		"fallback": "cif:tr",
	});
}

export default Component;
