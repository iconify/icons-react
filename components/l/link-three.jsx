import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lfug1vb7h.css';
import '../../css/q/q_lxrsbbr.css';
import '../../css/l/lv014sztu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect transform="rotate(45 34.607 3.494)" class="lfug1vb7h"/><rect transform="rotate(45 16.223 21.879)" class="q_lxrsbbr"/><path class="lv014sztu"/></g>`,
		"fallback": "icon-park-outline:link-three",
	});
}

export default Component;
