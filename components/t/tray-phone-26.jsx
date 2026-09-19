import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0n0lcbtx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0n0lcbtx"/>`,
		"fallback": "garden:tray-phone-26",
	});
}

export default Component;
