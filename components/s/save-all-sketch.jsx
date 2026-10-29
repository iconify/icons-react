import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pqg6tsbgc.css';
import '../../css/s/s4j63ro3g.css';
import '../../css/p/pn3iilfqd.css';
import '../../css/u/uo_lw3hck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pqg6tsbgc"/><path class="s4j63ro3g wm-a"/><path class="pn3iilfqd wm-k"/><path class="uo_lw3hck wm-a"/></g>`,
		"fallback": "withicons:save-all-sketch",
	});
}

export default Component;
