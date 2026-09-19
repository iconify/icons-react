import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jh71pcbtx.css';
import '../../css/l/lgrgacc6o.css';
import '../../css/b/bhv5jlbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jh71pcbtx"/><path class="lgrgacc6o"/><path class="bhv5jlbzr"/></g>`,
		"fallback": "hugeicons:reddit",
	});
}

export default Component;
