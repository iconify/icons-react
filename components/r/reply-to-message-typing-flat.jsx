import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwzs0to7y.css';
import '../../css/p/p2sf_jbee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qwzs0to7y"/><path class="p2sf_jbee"/></g>`,
		"fallback": "streamline-plump-color:reply-to-message-typing-flat",
	});
}

export default Component;
