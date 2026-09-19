import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mz5bv92bd.css';
import '../../css/p/p9swojy5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="mz5bv92bd"/><path class="p9swojy5o"/></g>`,
		"fallback": "icon-park-outline:list-two",
	});
}

export default Component;
