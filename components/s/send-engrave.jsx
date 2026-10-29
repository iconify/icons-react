import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/df0z6_b6i.css';
import '../../css/j/jpd9a-q0q.css';
import '../../css/g/ga5w9h8zd.css';
import '../../css/v/v3eqelbpl.css';
import '../../css/b/btb9bc3qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="df0z6_b6i wm-k"/><path class="jpd9a-q0q wm-a"/><path class="ga5w9h8zd wm-shadow"/><path class="v3eqelbpl wm-k"/><path class="btb9bc3qj wm-a"/></g>`,
		"fallback": "withicons:send-engrave",
	});
}

export default Component;
