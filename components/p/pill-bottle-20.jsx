import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0g24_-dr.css';
import '../../css/n/nodo6_-it.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0g24_-dr"/><path class="nodo6_-it"/>`,
		"fallback": "energy-icons:pill-bottle-20",
	});
}

export default Component;
