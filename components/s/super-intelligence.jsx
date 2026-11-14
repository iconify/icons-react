import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/juc40xb0w.css';
import '../../css/z/z90a7wnod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="juc40xb0w"/><path class="z90a7wnod"/></g>`,
		"fallback": "hugeicons:super-intelligence",
	});
}

export default Component;
