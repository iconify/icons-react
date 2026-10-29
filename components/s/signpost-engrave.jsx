import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h6-v3pfiv.css';
import '../../css/h/hkeb9lbtu.css';
import '../../css/j/jsn461bcb.css';
import '../../css/d/d59m1yvcb.css';
import '../../css/e/e--mbmb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h6-v3pfiv wm-k"/><path class="hkeb9lbtu wm-a"/><path class="jsn461bcb wm-shadow"/><path class="d59m1yvcb wm-k"/><path class="e--mbmb3x wm-a"/></g>`,
		"fallback": "withicons:signpost-engrave",
	});
}

export default Component;
