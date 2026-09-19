import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/ktskh049w.css';
import '../../css/a/ab1wfbc-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ktskh049w"/><path class="ab1wfbc-v"/></g>`,
		"fallback": "icon-park-solid:sailboat-one",
	});
}

export default Component;
