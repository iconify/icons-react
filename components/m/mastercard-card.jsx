import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j5csejyzh.css';
import '../../css/y/ya_03da-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j5csejyzh"/><path class="ya_03da-k"/></g>`,
		"fallback": "iconoir:mastercard-card",
	});
}

export default Component;
