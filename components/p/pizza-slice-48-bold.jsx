import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayrrf_kwh.css';
import '../../css/n/nnu64c95v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayrrf_kwh"/><path class="nnu64c95v"/>`,
		"fallback": "energy-icons:pizza-slice-48-bold",
	});
}

export default Component;
