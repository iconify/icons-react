import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jk5dtfgxh.css';
import '../../css/n/nefl88bbh.css';
import '../../css/m/ml9pot7bx.css';
import '../../css/n/nyp5msqgt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jk5dtfgxh"/><path class="nefl88bbh"/><path class="ml9pot7bx"/><path class="nyp5msqgt"/></g>`,
		"fallback": "glyphs:jack-duo",
	});
}

export default Component;
