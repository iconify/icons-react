import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jkwde5hmk.css';
import '../../css/x/xn5np7bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jkwde5hmk"/><path class="xn5np7bxu"/></g>`,
		"fallback": "andrsrxn:list-nested",
	});
}

export default Component;
