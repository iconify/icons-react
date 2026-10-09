import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2a3x9b1l.css';
import '../../css/n/nv5lv4auf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2a3x9b1l"/><path class="nv5lv4auf"/>`,
		"fallback": "energy-icons:spirit-level-20-bold",
	});
}

export default Component;
