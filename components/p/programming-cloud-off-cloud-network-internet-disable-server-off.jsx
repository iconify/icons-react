import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s034ffble.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s034ffble"/>`,
		"fallback": "streamline:programming-cloud-off-cloud-network-internet-disable-server-off",
	});
}

export default Component;
