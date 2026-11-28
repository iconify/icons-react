import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o20t1r6ee.css';
import '../../css/o/o121o_9mq.css';
import '../../css/b/bghfy0b3k.css';
import '../../css/c/c3siailnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o20t1r6ee"/><path class="o121o_9mq"/><path class="bghfy0b3k"/><path class="c3siailnp"/></g>`,
		"fallback": "iconaut:list-filter-x",
	});
}

export default Component;
