import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdrf_dzwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdrf_dzwm"/>`,
		"fallback": "boxicons:message-circle-dots-filled",
	});
}

export default Component;
