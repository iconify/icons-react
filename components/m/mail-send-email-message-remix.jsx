import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6lk1cg0j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y6lk1cg0j"/>`,
		"fallback": "streamline:mail-send-email-message-remix",
	});
}

export default Component;
