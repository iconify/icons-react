import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4447fbqf.css';
import '../../css/c/c-a3h2bzi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4447fbqf"/><path class="c-a3h2bzi"/>`,
		"fallback": "energy-icons:shield-alert-48-bold",
	});
}

export default Component;
