import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jtsr8kbdj.css';
import '../../css/v/vy47kdmbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jtsr8kbdj"/><path class="vy47kdmbi"/></g>`,
		"fallback": "andrsrxn:puzzle",
	});
}

export default Component;
