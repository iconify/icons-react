import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7su20_3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7su20_3m"/>`,
		"fallback": "boxicons:man-filled",
	});
}

export default Component;
