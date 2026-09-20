import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjymg8btm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjymg8btm"/>`,
		"fallback": "streamline:programming-cloud-wifi-cloud-wifi-internet-server-network",
	});
}

export default Component;
