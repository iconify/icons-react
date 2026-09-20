import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoz4v1svp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoz4v1svp"/>`,
		"fallback": "roentgen:power-tower-h-frame-3-level",
	});
}

export default Component;
