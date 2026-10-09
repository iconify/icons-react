import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h28y0dbgc.css';
import '../../css/e/eixy3mbhj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h28y0dbgc"/><path class="eixy3mbhj"/>`,
		"fallback": "energy-icons:sun-rain-20-bold",
	});
}

export default Component;
