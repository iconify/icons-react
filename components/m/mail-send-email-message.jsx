import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/njeg68bwp.css';
import '../../css/b/b711qhbhq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="njeg68bwp"/><path class="b711qhbhq"/></g>`,
		"fallback": "streamline-plump-color:mail-send-email-message",
	});
}

export default Component;
