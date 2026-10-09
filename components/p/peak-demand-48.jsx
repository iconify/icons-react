import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb5gahbns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb5gahbns"/>`,
		"fallback": "energy-icons:peak-demand-48",
	});
}

export default Component;
