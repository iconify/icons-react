import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bg5v-lhxh.css';
import '../../css/e/ejywllbsj.css';

const viewBox = {"width":301,"height":119};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bg5v-lhxh"/><path class="ejywllbsj"/></g>`,
		"fallback": "cif:qa",
	});
}

export default Component;
