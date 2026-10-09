import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihvpr_l5t.css';
import '../../css/e/e_x4yrbug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihvpr_l5t"/><path class="e_x4yrbug"/>`,
		"fallback": "energy-icons:send-48-bold",
	});
}

export default Component;
