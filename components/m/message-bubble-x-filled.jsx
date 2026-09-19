import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngzg86xih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngzg86xih"/>`,
		"fallback": "boxicons:message-bubble-x-filled",
	});
}

export default Component;
