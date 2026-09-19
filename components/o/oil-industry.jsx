import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/d06-d4bly.css';
import '../../css/y/yvrwegihz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="d06-d4bly"/><path class="yvrwegihz"/></g>`,
		"fallback": "icon-park-outline:oil-industry",
	});
}

export default Component;
