import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e2b4x00yh.css';
import '../../css/q/qysem7bon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e2b4x00yh"/><path class="qysem7bon"/></g>`,
		"fallback": "hugeicons:waiters",
	});
}

export default Component;
