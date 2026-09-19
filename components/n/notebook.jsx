import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kq4y83xdm.css';
import '../../css/w/w1wv4tb9z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="kq4y83xdm"/><path class="w1wv4tb9z"/></g>`,
		"fallback": "icon-park-outline:notebook",
	});
}

export default Component;
