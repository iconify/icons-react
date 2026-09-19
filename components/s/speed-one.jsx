import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/srgempbqb.css';
import '../../css/a/a350jnbrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="srgempbqb"/><path class="a350jnbrs"/></g>`,
		"fallback": "icon-park-outline:speed-one",
	});
}

export default Component;
