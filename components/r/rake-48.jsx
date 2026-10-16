import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn2pyy8sf.css';
import '../../css/k/kk4dg3bfe.css';
import '../../css/k/k4nernbaq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn2pyy8sf"/><path class="kk4dg3bfe"/><path class="k4nernbaq"/>`,
		"fallback": "energy-icons:rake-48",
	});
}

export default Component;
