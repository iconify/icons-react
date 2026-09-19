import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piykylb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piykylb2u"/>`,
		"fallback": "boxicons:message-bubble-dots-filled",
	});
}

export default Component;
