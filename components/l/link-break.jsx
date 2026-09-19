import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t5tv3kbbu.css';
import '../../css/k/ki7_eehwf.css';
import '../../css/k/ktt-wx2-u.css';
import '../../css/f/f5zw2kb_m.css';
import '../../css/i/i352zqbds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="t5tv3kbbu"/><path class="ki7_eehwf"/><path class="ktt-wx2-u"/><path class="f5zw2kb_m"/><path class="i352zqbds"/></g>`,
		"fallback": "icon-park:link-break",
	});
}

export default Component;
