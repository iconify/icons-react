import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvt5o2b6f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qvt5o2b6f"/>`,
		"fallback": "streamline-plump:mail-send-reply-all-remix",
	});
}

export default Component;
