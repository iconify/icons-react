import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ue43iqbru.css';
import '../../css/q/qec462b4c.css';
import '../../css/z/z6483qz1b.css';
import '../../css/v/vwhhyi-0x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ue43iqbru"/><path class="qec462b4c"/><path class="z6483qz1b"/><path class="vwhhyi-0x"/></g>`,
		"fallback": "streamline-flex-color:watch-circle-charging",
	});
}

export default Component;
