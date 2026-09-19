import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yskvirclu.css';
import '../../css/w/wnu5hjbyz.css';
import '../../css/j/j7-ykzbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yskvirclu"/><path class="wnu5hjbyz"/><path class="j7-ykzbjp"/></g>`,
		"fallback": "iconoir:scale-frame-reduce",
	});
}

export default Component;
