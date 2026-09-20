import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/ucp-lmxsk.css';
import '../../css/k/kyiuc3bfe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ucp-lmxsk"/><path class="kyiuc3bfe"/></g>`,
		"fallback": "streamline-plump:reply-to-message-typing",
	});
}

export default Component;
