import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/a/ash26wbvd.css';
import '../../css/w/wlc86acyo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="ash26wbvd"/><path class="wlc86acyo"/></g>`,
		"fallback": "doodle-icons:pin",
	});
}

export default Component;
