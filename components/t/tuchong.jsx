import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/ja8cnttar.css';
import '../../css/t/t4xl_0g8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ja8cnttar"/><path class="t4xl_0g8d"/></g>`,
		"fallback": "icon-park-outline:tuchong",
	});
}

export default Component;
