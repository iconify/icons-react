import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c0oyuo_sd.css';
import '../../css/j/jbrs2gbhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c0oyuo_sd"/><path class="jbrs2gbhz"/></g>`,
		"fallback": "hugeicons:timeline",
	});
}

export default Component;
