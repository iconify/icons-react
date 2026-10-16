import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9ilzsbir.css';
import '../../css/y/y2aittblo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9ilzsbir"/><path class="y2aittblo"/>`,
		"fallback": "energy-icons:level-gauge-48-bold",
	});
}

export default Component;
