import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-l1pd0_w.css';
import '../../css/a/aghnw_bgv.css';
import '../../css/m/mcl_-ke3h.css';
import '../../css/a/ahtm1qbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h-l1pd0_w"><path clip-rule="evenodd" class="aghnw_bgv"/><path class="mcl_-ke3h"/><path clip-rule="evenodd" class="ahtm1qbts"/></g>`,
		"fallback": "iconoir:round-flask-solid",
	});
}

export default Component;
