import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hqk3egkyy.css';
import '../../css/y/yol8wbcqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hqk3egkyy"/><path class="yol8wbcqy"/></g>`,
		"fallback": "hugeicons:keyframe-align-center",
	});
}

export default Component;
