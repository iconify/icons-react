import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc39y9b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc39y9b1t"/>`,
		"fallback": "mdi:message-question",
	});
}

export default Component;
