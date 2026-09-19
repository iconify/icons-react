import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mk4rcgb2l.css';
import '../../css/b/b98o3ib5q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="mk4rcgb2l"/><path class="b98o3ib5q"/></g>`,
		"fallback": "icon-park-solid:paper-ship",
	});
}

export default Component;
