import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw7t2ddpt.css';
import '../../css/t/tpuop0bqq.css';
import '../../css/o/oa4z7jbas.css';
import '../../css/i/imw8tubjr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cw7t2ddpt"/><path class="tpuop0bqq"/><path class="oa4z7jbas"/><path class="imw8tubjr"/></g>`,
		"fallback": "fluent-emoji-flat:outbox-tray",
	});
}

export default Component;
