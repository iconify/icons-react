import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/n/nfoaacb-u.css';
import '../../css/j/j89xbobxl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="nfoaacb-u"/><path class="j89xbobxl"/></g>`,
		"fallback": "streamline-plump:mail-send-reply-all",
	});
}

export default Component;
