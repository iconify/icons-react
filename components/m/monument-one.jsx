import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r_e0x_bru.css';
import '../../css/x/xpuc5vjzo.css';
import '../../css/j/j9hg1or3h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="r_e0x_bru"/><path class="xpuc5vjzo"/><path class="j9hg1or3h"/></g>`,
		"fallback": "icon-park-solid:monument-one",
	});
}

export default Component;
