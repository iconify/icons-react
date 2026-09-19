import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yqknpab5q.css';
import '../../css/j/j-fop-byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yqknpab5q"/><path class="j-fop-byt"/></g>`,
		"fallback": "hugeicons:pillow",
	});
}

export default Component;
