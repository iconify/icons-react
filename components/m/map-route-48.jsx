import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/narq3v77u.css';
import '../../css/o/o8xu78b9h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="narq3v77u"/><path class="o8xu78b9h"/>`,
		"fallback": "energy-icons:map-route-48",
	});
}

export default Component;
