import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jsj8gunlj.css';
import '../../css/m/mzmeouzvr.css';
import '../../css/i/ifpcpz80t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jsj8gunlj"/><path class="mzmeouzvr"/><path class="ifpcpz80t"/></g>`,
		"fallback": "solar:plus-minus-line-duotone",
	});
}

export default Component;
