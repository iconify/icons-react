import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s51mchghq.css';
import '../../css/j/jubs4xbwi.css';
import '../../css/e/ekdqmc0zy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s51mchghq"/><path class="jubs4xbwi"/><path class="ekdqmc0zy"/></g>`,
		"fallback": "streamline-flex-color:receipt",
	});
}

export default Component;
