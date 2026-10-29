import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hq6er7bna.css';
import '../../css/t/tnmq82bgo.css';
import '../../css/w/w92wrj6_t.css';
import '../../css/q/qlo-3bb5t.css';
import '../../css/m/m2ozt278e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hq6er7bna"/><path class="tnmq82bgo wm-k"/><path class="w92wrj6_t wm-k"/><path class="qlo-3bb5t wm-a"/><circle class="m2ozt278e wm-a"/></g>`,
		"fallback": "withicons:spider-web-sketch",
	});
}

export default Component;
