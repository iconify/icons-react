import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/b592jbbpg.css';
import '../../css/q/qfqew4w1l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="b592jbbpg"/><path class="qfqew4w1l"/></g>`,
		"fallback": "icon-park-solid:transporter",
	});
}

export default Component;
