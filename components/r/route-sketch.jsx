import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/ttbnysbpu.css';
import '../../css/t/tf8653b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ttbnysbpu wm-k"/><path class="tf8653b3t wm-a"/></g>`,
		"fallback": "withicons:route-sketch",
	});
}

export default Component;
