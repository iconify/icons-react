import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byoy_2dlf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byoy_2dlf"/>`,
		"fallback": "streamline:interface-download-button-2-arrow-bottom-down-download-internet-network-server-upload",
	});
}

export default Component;
