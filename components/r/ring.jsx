import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ir0nr5vgs.css';
import '../../css/e/e_q1tn3fm.css';
import '../../css/g/gu43cdvmi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ir0nr5vgs"/><path class="e_q1tn3fm"/><path class="gu43cdvmi"/></g>`,
		"fallback": "fluent-emoji-flat:ring",
	});
}

export default Component;
