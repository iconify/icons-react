import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j1c5z9bpg.css';
import '../../css/b/b5krwpbty.css';
import '../../css/t/t4ya6qb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j1c5z9bpg"/><path class="b5krwpbty wm-shadow"/><path class="t4ya6qb4m"/></g>`,
		"fallback": "withicons:signal-engrave",
	});
}

export default Component;
