import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bdqapd8qi.css';
import '../../css/k/k6zc6ccgf.css';
import '../../css/w/w92r_czij.css';
import '../../css/q/q3fe9qb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bdqapd8qi wm-k"/><path class="k6zc6ccgf wm-a"/><path class="w92r_czij wm-k"/><path class="q3fe9qb1y wm-a"/></g>`,
		"fallback": "withicons:waves-sketch",
	});
}

export default Component;
