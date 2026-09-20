import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkh-x7lkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkh-x7lkt"/>`,
		"fallback": "mage:message-round-fill",
	});
}

export default Component;
