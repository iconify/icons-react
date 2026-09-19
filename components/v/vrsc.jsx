import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e56-6qbwi.css';
import '../../css/e/ecvsodvvp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="e56-6qbwi"/><path class="ecvsodvvp"/></g>`,
		"fallback": "cryptocurrency-color:vrsc",
	});
}

export default Component;
