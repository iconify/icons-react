import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxh9rydyd.css';
import '../../css/a/aexs-bb9t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxh9rydyd"/><path class="aexs-bb9t"/>`,
		"fallback": "energy-icons:sailboat-20-bold",
	});
}

export default Component;
