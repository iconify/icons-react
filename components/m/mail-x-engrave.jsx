import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hrdkuzqjh.css';
import '../../css/b/b7u2wk65u.css';
import '../../css/g/g6sgkxg7s.css';
import '../../css/u/uno70bdds.css';
import '../../css/w/wz8gm4bgl.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/c/c_msbbeve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hrdkuzqjh wm-k"/><path class="b7u2wk65u wm-a"/><path class="g6sgkxg7s wm-s"/><path class="uno70bdds wm-shadow"/><path class="wm-k wz8gm4bgl"/><path class="wm-a wqb-0n4qk"/><path class="c_msbbeve wm-s"/></g>`,
		"fallback": "withicons:mail-x-engrave",
	});
}

export default Component;
