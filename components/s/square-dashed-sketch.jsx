import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tr4dphbyd.css';
import '../../css/r/rdd1_t1yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tr4dphbyd"/><path class="rdd1_t1yo"/></g>`,
		"fallback": "withicons:square-dashed-sketch",
	});
}

export default Component;
