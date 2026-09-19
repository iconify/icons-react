import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vx5xd6byq.css';
import '../../css/q/qe5mrybjn.css';
import '../../css/j/j9yh9hwkt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vx5xd6byq"/><path class="qe5mrybjn"/><path class="j9yh9hwkt"/></g>`,
		"fallback": "pepicons:studio-light-front",
	});
}

export default Component;
