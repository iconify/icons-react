import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqxey5aoc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqxey5aoc"/>`,
		"fallback": "streamline:programming-cloud-download-cloud-down-internet-network-download-server-arrow",
	});
}

export default Component;
