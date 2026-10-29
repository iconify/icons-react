import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hrdkuzqjh.css';
import '../../css/b/b7u2wk65u.css';
import '../../css/k/kz9nbbblq.css';
import '../../css/i/ield3zexx.css';
import '../../css/w/wz8gm4bgl.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/l/lf-b92d3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hrdkuzqjh wm-k"/><path class="b7u2wk65u wm-a"/><path class="kz9nbbblq wm-s"/><path class="ield3zexx wm-shadow"/><path class="wm-k wz8gm4bgl"/><path class="wm-a wqb-0n4qk"/><path class="lf-b92d3v wm-s"/></g>`,
		"fallback": "withicons:mail-check-engrave",
	});
}

export default Component;
