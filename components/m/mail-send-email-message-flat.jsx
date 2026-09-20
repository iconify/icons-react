import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd6hm15ed.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd6hm15ed"/>`,
		"fallback": "streamline-plump-color:mail-send-email-message-flat",
	});
}

export default Component;
