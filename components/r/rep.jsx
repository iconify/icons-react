import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g6pe_w2_a.css';
import '../../css/a/ah8v0x1oz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="g6pe_w2_a"/><path class="ah8v0x1oz"/></g>`,
		"fallback": "cryptocurrency-color:rep",
	});
}

export default Component;
