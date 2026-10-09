import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4kx72bov.css';
import '../../css/n/n-zjmmulx.css';
import '../../css/q/q4l9ctu0n.css';
import '../../css/u/uq78lkwmy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4kx72bov"/><path class="n-zjmmulx"/><path class="q4l9ctu0n"/><path class="uq78lkwmy"/>`,
		"fallback": "energy-icons:vacuum-48-bold",
	});
}

export default Component;
