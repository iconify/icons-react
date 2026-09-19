import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/ct7xkwr4c.css';
import '../../css/q/qpokn5rgz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ct7xkwr4c"/><path class="qpokn5rgz"/></g>`,
		"fallback": "icon-park-outline:paper-money",
	});
}

export default Component;
