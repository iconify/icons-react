import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/edg1r3a0e.css';
import '../../css/q/qcs51wjjn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="edg1r3a0e"/><path class="qcs51wjjn"/></g>`,
		"fallback": "icon-park-outline:sofa",
	});
}

export default Component;
