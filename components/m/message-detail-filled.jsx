import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slxefw72b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slxefw72b"/>`,
		"fallback": "boxicons:message-detail-filled",
	});
}

export default Component;
