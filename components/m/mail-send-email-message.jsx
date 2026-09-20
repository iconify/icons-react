import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/rt2607b9w.css';
import '../../css/w/wytv0dboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="rt2607b9w"/><path class="wytv0dboo"/></g>`,
		"fallback": "streamline-sharp-color:mail-send-email-message",
	});
}

export default Component;
