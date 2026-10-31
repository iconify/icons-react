import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e_0ol5bde.css';
import '../../css/q/qiikibbxh.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e_0ol5bde"/><path class="qiikibbxh"/></g>`,
		"fallback": "cif:ma",
	});
}

export default Component;
