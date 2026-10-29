import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/unyxg6bnj.css';
import '../../css/o/o5gwckbir.css';
import '../../css/x/xknnqlb9b.css';
import '../../css/h/hi-3gxb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="unyxg6bnj wm-k"/><path class="o5gwckbir wm-s"/><path class="wm-k xknnqlb9b"/><path class="hi-3gxb_k wm-s"/></g>`,
		"fallback": "withicons:list-x-sketch",
	});
}

export default Component;
