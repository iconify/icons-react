import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdaqwbcvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdaqwbcvd"/>`,
		"fallback": "keyline-icons:paperclip-two-tone",
	});
}

export default Component;
