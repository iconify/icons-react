import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvu1ubcpn.css';
import '../../css/p/po8pqxbxi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvu1ubcpn"/><path class="po8pqxbxi"/>`,
		"fallback": "material-icon-theme:rescript-interface",
	});
}

export default Component;
