import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p3-_4go3t.css';
import '../../css/s/sqcoqw8mq.css';
import '../../css/f/fjlt6hboo.css';
import '../../css/x/xw1j3gbjr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="p3-_4go3t"/><path class="sqcoqw8mq"/><path class="fjlt6hboo"/><path class="xw1j3gbjr"/></g>`,
		"fallback": "streamline-plump-color:phone-vibrate",
	});
}

export default Component;
