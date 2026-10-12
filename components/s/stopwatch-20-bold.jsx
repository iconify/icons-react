import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peu1myr5j.css';
import '../../css/i/injsvdbgs.css';
import '../../css/j/j39cvqb6a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peu1myr5j"/><path class="injsvdbgs"/><path class="j39cvqb6a"/>`,
		"fallback": "energy-icons:stopwatch-20-bold",
	});
}

export default Component;
