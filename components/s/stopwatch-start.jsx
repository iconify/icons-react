import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tbyf68bpo.css';
import '../../css/t/ts-hhubnq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="tbyf68bpo"/><path class="ts-hhubnq"/></g>`,
		"fallback": "icon-park-outline:stopwatch-start",
	});
}

export default Component;
