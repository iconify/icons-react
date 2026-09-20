import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/waaq9zb6u.css';
import '../../css/p/p7j7-kiek.css';
import '../../css/j/jkbmv5baa.css';
import '../../css/a/a0omlzbdi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="waaq9zb6u"/><path class="p7j7-kiek"/><path class="jkbmv5baa"/><path class="a0omlzbdi"/></g>`,
		"fallback": "streamline-plump-color:traffic-light",
	});
}

export default Component;
