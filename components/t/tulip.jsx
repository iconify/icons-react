import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j3k84q9hw.css';
import '../../css/b/bjqhmrb9b.css';
import '../../css/p/plnv7b-ws.css';
import '../../css/j/j3eweebcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j3k84q9hw"/><path class="bjqhmrb9b"/><path class="plnv7b-ws"/><path class="j3eweebcu"/></g>`,
		"fallback": "iconaut:tulip",
	});
}

export default Component;
