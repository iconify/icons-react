import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s31m2-b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s31m2-b0i"/>`,
		"fallback": "boxicons:like-filled",
	});
}

export default Component;
