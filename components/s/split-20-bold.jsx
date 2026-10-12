import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0t8-abhi.css';
import '../../css/j/j30lsq6za.css';
import '../../css/g/gh5mgezjj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0t8-abhi"/><path class="j30lsq6za"/><path class="gh5mgezjj"/>`,
		"fallback": "energy-icons:split-20-bold",
	});
}

export default Component;
