import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bl503myht.css';
import '../../css/f/flmqy2bwe.css';
import '../../css/k/klb-gptbu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="bl503myht"/><path class="flmqy2bwe"/><path class="klb-gptbu"/></g>`,
		"fallback": "icon-park-outline:radar-chart",
	});
}

export default Component;
