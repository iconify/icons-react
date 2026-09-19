import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/f/f6mlyysyg.css';
import '../../css/p/pgf8e-6mx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="vkcj4bcdm"/><path class="f6mlyysyg"/><rect class="pgf8e-6mx"/></g>`,
		"fallback": "icon-park-outline:surprised-face-with-open-mouth",
	});
}

export default Component;
