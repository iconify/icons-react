import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3bqa_bks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3bqa_bks"/>`,
		"fallback": "streamline-plump:mail-send-email-message-solid",
	});
}

export default Component;
