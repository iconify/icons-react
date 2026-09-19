import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifw9_u73n.css';
import '../../css/q/qa6etfrcv.css';
import '../../css/i/i-awu_zpx.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ifw9_u73n"/><path class="qa6etfrcv"/><path class="i-awu_zpx"/></g>`,
		"fallback": "cif:lt",
	});
}

export default Component;
