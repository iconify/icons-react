import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjdl1fw-g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjdl1fw-g"/>`,
		"fallback": "selfhst:rocket-chat-light",
	});
}

export default Component;
