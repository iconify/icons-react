import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yn5_upbxh.css';
import '../../css/x/xvh9ry9dj.css';
import '../../css/z/ztnistjcg.css';
import '../../css/p/pgm-ug5jq.css';
import '../../css/n/n65i2cfkw.css';
import '../../css/c/c9mwe-beg.css';
import '../../css/y/yeh6x5bvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yn5_upbxh"/><path class="wm-a xvh9ry9dj"/><path class="wm-s ztnistjcg"/><path class="pgm-ug5jq wm-shadow"/><path class="n65i2cfkw wm-k"/><path class="c9mwe-beg wm-a"/><path class="wm-s yeh6x5bvv"/></g>`,
		"fallback": "withicons:paint-bucket-engrave",
	});
}

export default Component;
