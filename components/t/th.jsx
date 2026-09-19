import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6tb832tf.css';
import '../../css/i/ieor42tgz.css';
import '../../css/c/c87pxbcok.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e6tb832tf"/><path class="ieor42tgz"/><path class="c87pxbcok"/></g>`,
		"fallback": "cif:th",
	});
}

export default Component;
