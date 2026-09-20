import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxh_3sbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxh_3sbpn"/>`,
		"fallback": "keyline-icons:reply-all-sharp-fill",
	});
}

export default Component;
