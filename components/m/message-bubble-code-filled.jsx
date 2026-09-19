import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfv7tub0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfv7tub0j"/>`,
		"fallback": "boxicons:message-bubble-code-filled",
	});
}

export default Component;
