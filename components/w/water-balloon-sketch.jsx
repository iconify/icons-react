import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b_daz9b-v.css';
import '../../css/h/hesi-6b2b.css';
import '../../css/l/lpqhqpbji.css';
import '../../css/g/gqa2miriq.css';
import '../../css/g/g6z7dxblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b_daz9b-v"/><path class="hesi-6b2b wm-k"/><path class="lpqhqpbji wm-a"/><path class="gqa2miriq wm-k"/><path class="g6z7dxblg wm-a"/></g>`,
		"fallback": "withicons:water-balloon-sketch",
	});
}

export default Component;
