import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8wxn8xap.css';
import '../../css/g/g5q9qkbwi.css';
import '../../css/x/x3_kr2bze.css';
import '../../css/v/vl_70lije.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j8wxn8xap"/><path clip-rule="evenodd" class="g5q9qkbwi"/><path clip-rule="evenodd" class="x3_kr2bze"/><path class="vl_70lije"/></g>`,
		"fallback": "healthicons:rdt-result-invalid2x-outline",
	});
}

export default Component;
