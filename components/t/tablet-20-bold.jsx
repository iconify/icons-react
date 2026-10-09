import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byse_4bgl.css';
import '../../css/j/j17_kebzo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byse_4bgl"/><path class="j17_kebzo"/>`,
		"fallback": "energy-icons:tablet-20-bold",
	});
}

export default Component;
