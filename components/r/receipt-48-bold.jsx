import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk4s-jblr.css';
import '../../css/q/qftg15_vk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk4s-jblr"/><path class="qftg15_vk"/>`,
		"fallback": "energy-icons:receipt-48-bold",
	});
}

export default Component;
