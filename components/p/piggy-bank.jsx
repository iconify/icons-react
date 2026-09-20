import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qmokd4o7b.css';
import '../../css/n/n6zsc5g_g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="qmokd4o7b"/><path class="n6zsc5g_g"/></g>`,
		"fallback": "streamline-plump:piggy-bank",
	});
}

export default Component;
