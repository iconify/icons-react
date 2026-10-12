import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/upw8f7bde.css';
import '../../css/y/ycdjovcgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="upw8f7bde"/><path class="ycdjovcgc"/></g>`,
		"fallback": "andrsrxn:text-wrap",
	});
}

export default Component;
