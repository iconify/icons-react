import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvbv01bcc.css';
import '../../css/h/hbahfflyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvbv01bcc"/><path class="hbahfflyx"/>`,
		"fallback": "boxicons:parent-child-filled",
	});
}

export default Component;
