import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctmyokx8x.css';
import '../../css/j/j_as-15we.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctmyokx8x"/><path class="j_as-15we"/>`,
		"fallback": "energy-icons:nuclear-plant-20-bold",
	});
}

export default Component;
