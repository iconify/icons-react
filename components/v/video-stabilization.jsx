import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz0f1vbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz0f1vbeo"/>`,
		"fallback": "mdi:video-stabilization",
	});
}

export default Component;
