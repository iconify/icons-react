import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hfap8z5lo.css';
import '../../css/p/pydtcwi0b.css';
import '../../css/p/pfzd08f0w.css';
import '../../css/r/ri984nurg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hfap8z5lo"/><path class="pydtcwi0b wm-shadow"/><path class="pfzd08f0w"/><path class="ri984nurg"/></g>`,
		"fallback": "withicons:trophy-engrave",
	});
}

export default Component;
