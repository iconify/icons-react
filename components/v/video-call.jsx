import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksvw4dbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksvw4dbig"/>`,
		"fallback": "noviair-light:video-call",
	});
}

export default Component;
