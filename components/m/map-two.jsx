import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qcbv30b9l.css';
import '../../css/d/dsz9dwbht.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="qcbv30b9l"/><path class="dsz9dwbht"/></g>`,
		"fallback": "icon-park-outline:map-two",
	});
}

export default Component;
