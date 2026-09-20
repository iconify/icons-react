import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhtn5ibre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bhtn5ibre"/>`,
		"fallback": "streamline-sharp:mail-send-email-message-remix",
	});
}

export default Component;
