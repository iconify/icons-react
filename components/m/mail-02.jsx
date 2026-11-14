import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h88haibia.css';
import '../../css/a/aeapd2ack.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h88haibia"/><path class="aeapd2ack"/></g>`,
		"fallback": "hugeicons:mail-02",
	});
}

export default Component;
