import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/ka0cffbnj.css';
import '../../css/t/tke3h262y.css';
import '../../css/h/hpu_rfbxt.css';
import '../../css/g/gfg0fpbjr.css';
import '../../css/o/obbqqccjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ka0cffbnj"/><path class="tke3h262y wm-k"/><path class="hpu_rfbxt wm-a"/><path class="gfg0fpbjr wm-k"/><path class="obbqqccjp wm-a"/></g>`,
		"fallback": "withicons:shield-alert-sketch",
	});
}

export default Component;
