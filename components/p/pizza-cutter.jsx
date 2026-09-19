import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p5mlz8atx.css';
import '../../css/z/z217ocb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p5mlz8atx"/><path class="z217ocb6e"/></g>`,
		"fallback": "hugeicons:pizza-cutter",
	});
}

export default Component;
