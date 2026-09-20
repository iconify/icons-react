import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjnkxhlvx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjnkxhlvx"/>`,
		"fallback": "streamline:interface-upload-button-1-arrow-button-download-internet-network-server-up-upload",
	});
}

export default Component;
