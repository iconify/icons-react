import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx79rp8mg.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx79rp8mg"/>`,
		"fallback": "whh:walletalt",
	});
}

export default Component;
