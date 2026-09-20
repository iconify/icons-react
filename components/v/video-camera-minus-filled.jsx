import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxjf7cb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxjf7cb4w"/>`,
		"fallback": "tdesign:video-camera-minus-filled",
	});
}

export default Component;
