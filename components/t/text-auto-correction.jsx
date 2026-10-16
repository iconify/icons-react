import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sk5ftyg6q.css';
import '../../css/c/cljvb1eti.css';
import '../../css/t/tjzpwgkkr.css';
import '../../css/j/jfdiy92kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sk5ftyg6q"/><path class="cljvb1eti"/><path class="tjzpwgkkr"/><path class="jfdiy92kt"/></g>`,
		"fallback": "andrsrxn:text-auto-correction",
	});
}

export default Component;
