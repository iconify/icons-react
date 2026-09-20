import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7l4j2u2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7l4j2u2p"/>`,
		"fallback": "solar:reply-2-broken",
	});
}

export default Component;
