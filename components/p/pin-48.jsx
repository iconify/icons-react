import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3w-j2vjh.css';
import '../../css/d/dsi3v5bzc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3w-j2vjh"/><path class="dsi3v5bzc"/>`,
		"fallback": "energy-icons:pin-48",
	});
}

export default Component;
