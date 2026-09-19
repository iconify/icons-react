import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/v8eagnupx.css';
import '../../css/o/o2jheybdw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="v8eagnupx"/><path class="o2jheybdw"/></g>`,
		"fallback": "icon-park-outline:plug",
	});
}

export default Component;
