import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ijf_15bzi.css';
import '../../css/h/h1ebgedph.css';
import '../../css/h/hy8n1bbgx.css';
import '../../css/v/v_6vo7bnh.css';
import '../../css/z/ztl3s4zlh.css';
import '../../css/y/y1y91_bfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ijf_15bzi"/><path clip-rule="evenodd" class="h1ebgedph"/><path clip-rule="evenodd" class="hy8n1bbgx"/><path class="v_6vo7bnh"/><path class="ztl3s4zlh"/><path class="y1y91_bfa"/></g>`,
		"fallback": "solar:share-circle-outline",
	});
}

export default Component;
