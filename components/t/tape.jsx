import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/h5jjrmb9v.css';
import '../../css/n/nnyeuib9r.css';
import '../../css/s/s0zjehfxn.css';
import '../../css/c/ci4g90bhz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="h5jjrmb9v"/><path clip-rule="evenodd" class="nnyeuib9r"/><path class="s0zjehfxn"/><path class="ci4g90bhz"/></g>`,
		"fallback": "icon-park-outline:tape",
	});
}

export default Component;
