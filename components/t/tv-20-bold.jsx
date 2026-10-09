import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn698acuz.css';
import '../../css/q/qyfrutbua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn698acuz"/><path class="qyfrutbua"/>`,
		"fallback": "energy-icons:tv-20-bold",
	});
}

export default Component;
