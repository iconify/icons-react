import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giagzkb_z.css';
import '../../css/q/qgd51yb9o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="giagzkb_z"/><path class="qgd51yb9o"/>`,
		"fallback": "flat-color-icons:left-down",
	});
}

export default Component;
