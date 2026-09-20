import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u87k-tmdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u87k-tmdh"/>`,
		"fallback": "streamline-sharp:mail-send-email-message",
	});
}

export default Component;
