import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p1c4ohbig.css';
import '../../css/k/kc999gbve.css';
import '../../css/z/z8mp29m8t.css';
import '../../css/m/m26_tac-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p1c4ohbig wm-k"/><path class="kc999gbve wm-a"/><circle class="z8mp29m8t"/><circle class="m26_tac-z"/></g>`,
		"fallback": "withicons:teddy-bear-sketch",
	});
}

export default Component;
