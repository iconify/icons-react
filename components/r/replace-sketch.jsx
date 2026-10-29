import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x4_9b04xw.css';
import '../../css/b/buzsznbhz.css';
import '../../css/y/y2dwv2bgr.css';
import '../../css/a/arddq2bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="x4_9b04xw"/><path class="buzsznbhz wm-a"/><path class="wm-k y2dwv2bgr"/><path class="arddq2bwc wm-a"/></g>`,
		"fallback": "withicons:replace-sketch",
	});
}

export default Component;
