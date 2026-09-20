import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4whwz57b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4whwz57b"/>`,
		"fallback": "roentgen:power-tower-portal-3-level",
	});
}

export default Component;
