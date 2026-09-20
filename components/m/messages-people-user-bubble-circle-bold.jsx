import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsx3c6bcc.css';
import '../../css/e/elgr7ftla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsx3c6bcc"/><path class="elgr7ftla"/>`,
		"fallback": "streamline-ultimate:messages-people-user-bubble-circle-bold",
	});
}

export default Component;
