import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/u/uhfgxvb8v.css';
import '../../css/h/htbk-abbd.css';
import '../../css/i/i-ac3eiqy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="uhfgxvb8v"/><path class="htbk-abbd"/><path clip-rule="evenodd" class="i-ac3eiqy"/></g>`,
		"fallback": "fluent-emoji-flat:slightly-smiling-face",
	});
}

export default Component;
