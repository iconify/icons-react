import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/w14uhobpy.css';
import '../../css/y/yltrj23_b.css';
import '../../css/f/frfn5xzwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="w14uhobpy"/><path class="yltrj23_b"/><path class="frfn5xzwk"/></g>`,
		"fallback": "icon-park-solid:trace",
	});
}

export default Component;
