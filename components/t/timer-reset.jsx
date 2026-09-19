import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vgcgog8-w.css';
import '../../css/k/ke8zw38lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vgcgog8-w"/><path class="ke8zw38lp"/></g>`,
		"fallback": "hugeicons:timer-reset",
	});
}

export default Component;
