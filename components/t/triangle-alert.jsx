import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jfv4xbbjw.css';
import '../../css/y/yrxj94hwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jfv4xbbjw"/><path class="yrxj94hwa"/></g>`,
		"fallback": "hugeicons:triangle-alert",
	});
}

export default Component;
