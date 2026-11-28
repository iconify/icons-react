import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8sr66f0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8sr66f0r"/>`,
		"fallback": "noviair-light:network-alert",
	});
}

export default Component;
