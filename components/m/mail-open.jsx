import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/u2ji9ou7q.css';
import '../../css/h/hvzd0ubol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="u2ji9ou7q"/><path class="hvzd0ubol"/></g>`,
		"fallback": "icon-park-outline:mail-open",
	});
}

export default Component;
