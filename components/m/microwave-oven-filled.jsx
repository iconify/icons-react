import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmt3mh2kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmt3mh2kt"/>`,
		"fallback": "boxicons:microwave-oven-filled",
	});
}

export default Component;
