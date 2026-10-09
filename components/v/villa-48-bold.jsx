import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr3raed1b.css';
import '../../css/d/dln-x0qsh.css';
import '../../css/u/ubqjjwmkr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr3raed1b"/><path class="dln-x0qsh"/><path class="ubqjjwmkr"/>`,
		"fallback": "energy-icons:villa-48-bold",
	});
}

export default Component;
