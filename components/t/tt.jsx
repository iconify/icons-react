import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyw6smbbz.css';
import '../../css/z/z6jby4rpt.css';
import '../../css/z/zb716-bly.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iyw6smbbz"/><path class="z6jby4rpt"/><path class="zb716-bly"/></g>`,
		"fallback": "cif:tt",
	});
}

export default Component;
