import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1woiccaq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1woiccaq"/>`,
		"fallback": "pullo:sidebar-simple-right-bold",
	});
}

export default Component;
