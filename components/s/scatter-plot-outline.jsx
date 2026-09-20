import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka6dq8sfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka6dq8sfo"/>`,
		"fallback": "mdi:scatter-plot-outline",
	});
}

export default Component;
