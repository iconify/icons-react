import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g1-dnh7xo.css';
import '../../css/m/mdr1krqpu.css';
import '../../css/u/uaprxrdhx.css';
import '../../css/v/vs4f-zb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g1-dnh7xo"/><path class="mdr1krqpu wm-k"/><path class="uaprxrdhx"/><path class="vs4f-zb2g wm-a"/></g>`,
		"fallback": "withicons:turtle-sketch",
	});
}

export default Component;
