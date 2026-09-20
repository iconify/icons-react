import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en_uyyw_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en_uyyw_u"/>`,
		"fallback": "mdi:mailbox-up-outline",
	});
}

export default Component;
