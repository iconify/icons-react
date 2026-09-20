import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbcv2ibqv.css';
import '../../css/q/q9u93xp0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lbcv2ibqv"/><path class="q9u93xp0e"/>`,
		"fallback": "lineicons:microphone-1",
	});
}

export default Component;
