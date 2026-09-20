import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjpn_9bah.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjpn_9bah"/>`,
		"fallback": "oi:vertical-align-center",
	});
}

export default Component;
