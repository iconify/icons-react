import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdp49sb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdp49sb3a"/>`,
		"fallback": "guidance:mailbox",
	});
}

export default Component;
