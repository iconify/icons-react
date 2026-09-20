import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrj_-3b2y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qrj_-3b2y"/>`,
		"fallback": "streamline:notification-message-alert-solid",
	});
}

export default Component;
