import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-wxw6w6n.css';
import '../../css/c/culelpt1f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-wxw6w6n"/><path class="culelpt1f"/>`,
		"fallback": "energy-icons:taco-20",
	});
}

export default Component;
