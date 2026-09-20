import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmu1be8bm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hmu1be8bm"/>`,
		"fallback": "streamline-plump:mail-send-email-message-remix",
	});
}

export default Component;
