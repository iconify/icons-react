import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0l5ivb9x.css';
import '../../css/u/umgrjh4bj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0l5ivb9x"/><path class="umgrjh4bj"/>`,
		"fallback": "energy-icons:taco-48-bold",
	});
}

export default Component;
