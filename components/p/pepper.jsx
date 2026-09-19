import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y4yrbjb0s.css';
import '../../css/c/c53acdcbc.css';
import '../../css/w/wuv665bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y4yrbjb0s"/><path class="c53acdcbc"/><path class="wuv665bmk"/></g>`,
		"fallback": "hugeicons:pepper",
	});
}

export default Component;
