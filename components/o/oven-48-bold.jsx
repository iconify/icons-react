import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx1c48bxn.css';
import '../../css/v/v2hw9tbpa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx1c48bxn"/><path class="v2hw9tbpa"/>`,
		"fallback": "energy-icons:oven-48-bold",
	});
}

export default Component;
