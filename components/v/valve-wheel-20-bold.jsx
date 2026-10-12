import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0vq58ann.css';
import '../../css/g/gc5cgub_m.css';
import '../../css/e/e4uqd8dok.css';
import '../../css/f/fs6mmmbqs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0vq58ann"/><path class="gc5cgub_m"/><path class="e4uqd8dok"/><path class="fs6mmmbqs"/>`,
		"fallback": "energy-icons:valve-wheel-20-bold",
	});
}

export default Component;
