import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_r4442sy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_r4442sy"/>`,
		"fallback": "selfhst:quiet-chat-light",
	});
}

export default Component;
