import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhscmsbal.css';
import '../../css/e/ek8ab_bvz.css';
import '../../css/a/az1_6mbut.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rhscmsbal"/><path clip-rule="evenodd" class="ek8ab_bvz"/><path class="az1_6mbut"/></g>`,
		"fallback": "streamline-flex-color:wallet-flat",
	});
}

export default Component;
