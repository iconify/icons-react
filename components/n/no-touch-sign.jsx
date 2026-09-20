import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/f-q3bub4o.css';
import '../../css/e/e75ao5bmn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="f-q3bub4o"/><path class="e75ao5bmn"/></g>`,
		"fallback": "streamline-plump:no-touch-sign",
	});
}

export default Component;
