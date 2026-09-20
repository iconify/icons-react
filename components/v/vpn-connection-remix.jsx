import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng6nzyr8a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ng6nzyr8a"/>`,
		"fallback": "streamline:vpn-connection-remix",
	});
}

export default Component;
