import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3wp5cowp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3wp5cowp"/>`,
		"fallback": "energy-icons:power-off-48",
	});
}

export default Component;
