import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/edow243gp.css';
import '../../css/k/kd_0y5b8q.css';
import '../../css/j/ja135tymf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="edow243gp"/><path class="kd_0y5b8q"/><path class="ja135tymf"/></g>`,
		"fallback": "icon-park-outline:thermometer",
	});
}

export default Component;
