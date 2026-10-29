import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/krwaskb4k.css';
import '../../css/j/j8pt22lgn.css';
import '../../css/p/p315kqhvz.css';
import '../../css/b/b25ralmkw.css';
import '../../css/f/fpe-trb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="krwaskb4k"/><path class="j8pt22lgn wm-k"/><path class="p315kqhvz wm-s"/><path class="b25ralmkw wm-k"/><path class="fpe-trb0t wm-s"/></g>`,
		"fallback": "withicons:user-clock-sketch",
	});
}

export default Component;
