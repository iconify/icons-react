import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/moj28hbco.css';
import '../../css/u/uo1wgac5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="moj28hbco"/><path class="uo1wgac5o"/></g>`,
		"fallback": "icon-park-outline:medical-mark",
	});
}

export default Component;
