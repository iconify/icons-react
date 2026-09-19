import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbzpftb7t.css';
import '../../css/n/nxp8z3bju.css';
import '../../css/t/t06brsbwg.css';
import '../../css/f/f4xe2vbju.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wbzpftb7t"/><path class="nxp8z3bju"/><path class="t06brsbwg"/><path class="f4xe2vbju"/></g>`,
		"fallback": "glyphs:king-duo",
	});
}

export default Component;
