import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/okusuaboz.css';
import '../../css/m/msynidc3r.css';
import '../../css/l/lzsxj9r9o.css';
import '../../css/r/r7k_16bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="okusuaboz"/><path class="msynidc3r wm-k"/><path class="lzsxj9r9o wm-k"/><path class="r7k_16bhv wm-a"/></g>`,
		"fallback": "withicons:key-round-sketch",
	});
}

export default Component;
