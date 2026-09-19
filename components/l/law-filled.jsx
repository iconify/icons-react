import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn3q1jd5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn3q1jd5n"/>`,
		"fallback": "boxicons:law-filled",
	});
}

export default Component;
