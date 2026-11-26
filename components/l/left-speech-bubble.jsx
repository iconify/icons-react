import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znrjw83eg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znrjw83eg"/>`,
		"fallback": "xero-emoji:left-speech-bubble",
	});
}

export default Component;
