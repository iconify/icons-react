import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpw3o1bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpw3o1bjx"/>`,
		"fallback": "coolicons:microphone-off-round",
	});
}

export default Component;
