import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw74ukb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw74ukb1n"/>`,
		"fallback": "mdi:message-image",
	});
}

export default Component;
