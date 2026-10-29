import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b0956sv6c.css';
import '../../css/n/n-ivwgbnk.css';
import '../../css/y/yjlth0w6y.css';
import '../../css/m/m-bii893t.css';
import '../../css/w/wz8gm4bgl.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/j/jd9ceobpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b0956sv6c wm-k"/><path class="n-ivwgbnk wm-a"/><path class="wm-s yjlth0w6y"/><path class="m-bii893t wm-shadow"/><path class="wm-k wz8gm4bgl"/><path class="wm-a wqb-0n4qk"/><path class="jd9ceobpf wm-s"/></g>`,
		"fallback": "withicons:mail-search-engrave",
	});
}

export default Component;
