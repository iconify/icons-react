import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/ca__wz0nr.css';
import '../../css/j/j266wlgmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ca__wz0nr"/><path class="j266wlgmh"/></g>`,
		"fallback": "hugeicons:store-02",
	});
}

export default Component;
