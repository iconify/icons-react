import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wy0rr7sck.css';
import '../../css/q/q4ik7kbpj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="wy0rr7sck"/><path class="q4ik7kbpj"/></g>`,
		"fallback": "icon-park-outline:tree-list",
	});
}

export default Component;
