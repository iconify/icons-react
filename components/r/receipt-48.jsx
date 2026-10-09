import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oegrs6bql.css';
import '../../css/o/okiekq7yz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oegrs6bql"/><path class="okiekq7yz"/>`,
		"fallback": "energy-icons:receipt-48",
	});
}

export default Component;
