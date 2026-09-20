import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k09b0rb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k09b0rb4x"/>`,
		"fallback": "solar:video-frame-2-linear",
	});
}

export default Component;
