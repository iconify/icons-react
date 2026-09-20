import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhtronb4k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hhtronb4k"/>`,
		"fallback": "streamline:send-email-remix",
	});
}

export default Component;
