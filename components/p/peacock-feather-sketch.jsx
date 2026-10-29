import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xa_x1dbjv.css';
import '../../css/d/dlhe9xb0h.css';
import '../../css/p/p9ineh26q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xa_x1dbjv"/><path class="dlhe9xb0h wm-k"/><path class="p9ineh26q wm-a"/></g>`,
		"fallback": "withicons:peacock-feather-sketch",
	});
}

export default Component;
