import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nic15ybst.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nic15ybst"/>`,
		"fallback": "garden:lightning-bolt-fill-12",
	});
}

export default Component;
