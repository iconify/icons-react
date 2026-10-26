import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6yd4ubmb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6yd4ubmb"/>`,
		"fallback": "doodle-icons:ruler",
	});
}

export default Component;
