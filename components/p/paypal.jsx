import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn0c3r6yz.css';
import '../../css/z/zbdow5bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn0c3r6yz"/><path class="zbdow5bzb"/>`,
		"fallback": "uim:paypal",
	});
}

export default Component;
