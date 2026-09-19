import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mqltdybcy.css';
import '../../css/n/n_jh6lbfx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="mqltdybcy"/><path class="n_jh6lbfx"/></g>`,
		"fallback": "icon-park-solid:rectangular-circular-connection",
	});
}

export default Component;
