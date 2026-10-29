import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jrl639bzb.css';
import '../../css/c/cqn-6lboc.css';
import '../../css/g/g_wmz4e_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jrl639bzb"/><path class="cqn-6lboc wm-k"/><path class="g_wmz4e_j wm-k"/></g>`,
		"fallback": "withicons:power-sketch",
	});
}

export default Component;
