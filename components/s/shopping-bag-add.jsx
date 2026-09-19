import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lxezjuc9o.css';
import '../../css/r/rgjlx13rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lxezjuc9o"/><path class="rgjlx13rm"/></g>`,
		"fallback": "hugeicons:shopping-bag-add",
	});
}

export default Component;
