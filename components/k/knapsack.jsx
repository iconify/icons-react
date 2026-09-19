import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gin8xwbji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gin8xwbji"/>`,
		"fallback": "game-icons:knapsack",
	});
}

export default Component;
