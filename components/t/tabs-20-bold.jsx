import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_a0sffvb.css';
import '../../css/f/fan1dzboe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_a0sffvb"/><path class="fan1dzboe"/>`,
		"fallback": "energy-icons:tabs-20-bold",
	});
}

export default Component;
