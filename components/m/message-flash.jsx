import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw0emvb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw0emvb-d"/>`,
		"fallback": "mdi:message-flash",
	});
}

export default Component;
