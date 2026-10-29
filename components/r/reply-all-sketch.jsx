import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/op9vzzuvw.css';
import '../../css/v/vc60k4bry.css';
import '../../css/c/cus0ge-pw.css';
import '../../css/e/eew58wbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="op9vzzuvw wm-k"/><path class="vc60k4bry wm-a"/><path class="cus0ge-pw wm-k"/><path class="eew58wbvh wm-a"/></g>`,
		"fallback": "withicons:reply-all-sketch",
	});
}

export default Component;
