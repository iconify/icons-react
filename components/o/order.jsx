import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pidggdbss.css';
import '../../css/j/jgw8fgb3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="pidggdbss"/><path class="jgw8fgb3y"/></g>`,
		"fallback": "icon-park-outline:order",
	});
}

export default Component;
