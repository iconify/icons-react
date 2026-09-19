import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/h/htbqfqvtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g4zs08s-q"/><path class="htbqfqvtu"/></g>`,
		"fallback": "hugeicons:moon",
	});
}

export default Component;
