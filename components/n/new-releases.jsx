import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/j_q6xybum.css';
import '../../css/o/o0a-q5bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="j_q6xybum"/><path class="o0a-q5bwo"/></g>`,
		"fallback": "hugeicons:new-releases",
	});
}

export default Component;
