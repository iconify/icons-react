import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euckcfb8p.css';
import '../../css/h/h3oyx7bzn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euckcfb8p"/><path class="h3oyx7bzn"/>`,
		"fallback": "energy-icons:taco-20-bold",
	});
}

export default Component;
