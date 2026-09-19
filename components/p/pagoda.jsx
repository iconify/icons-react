import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/v81vt1b_c.css';
import '../../css/e/ef6l1eg-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="v81vt1b_c"/><path class="ef6l1eg-m"/></g>`,
		"fallback": "icon-park-solid:pagoda",
	});
}

export default Component;
