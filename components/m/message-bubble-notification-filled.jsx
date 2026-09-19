import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or6rs0b6f.css';
import '../../css/i/iku26qo3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or6rs0b6f"/><path class="iku26qo3s"/>`,
		"fallback": "boxicons:message-bubble-notification-filled",
	});
}

export default Component;
