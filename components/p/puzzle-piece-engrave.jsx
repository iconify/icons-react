import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b_uq6-6qm.css';
import '../../css/j/j-0g3nb-u.css';
import '../../css/o/on6hknbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b_uq6-6qm"/><path class="j-0g3nb-u wm-shadow"/><path class="on6hknbag"/></g>`,
		"fallback": "withicons:puzzle-piece-engrave",
	});
}

export default Component;
