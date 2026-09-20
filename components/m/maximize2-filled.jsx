import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky77crbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky77crbct"/>`,
		"fallback": "reicon:maximize2-filled",
	});
}

export default Component;
