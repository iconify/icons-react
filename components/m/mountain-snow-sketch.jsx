import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/ddrij4byh.css';
import '../../css/u/uy1c6ogkr.css';
import '../../css/p/pt47m9bdk.css';
import '../../css/w/w2na52oxh.css';
import '../../css/o/o_3oriblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ddrij4byh"/><path class="uy1c6ogkr wm-k"/><path class="pt47m9bdk wm-a"/><path class="w2na52oxh wm-k"/><path class="o_3oriblb wm-a"/></g>`,
		"fallback": "withicons:mountain-snow-sketch",
	});
}

export default Component;
