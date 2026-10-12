import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/thziqe0rq.css';
import '../../css/g/ga84jxbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="thziqe0rq"/><path class="ga84jxbgl"/></g>`,
		"fallback": "andrsrxn:repost-check",
	});
}

export default Component;
