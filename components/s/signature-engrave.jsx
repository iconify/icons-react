import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sh_9j11bm.css';
import '../../css/p/p-zp6abgy.css';
import '../../css/a/au-aqdi1z.css';
import '../../css/z/z1gf-w-er.css';
import '../../css/q/qjoi1kboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sh_9j11bm wm-k"/><path class="p-zp6abgy wm-a"/><path class="au-aqdi1z wm-shadow"/><path class="wm-k z1gf-w-er"/><path class="qjoi1kboe wm-a"/></g>`,
		"fallback": "withicons:signature-engrave",
	});
}

export default Component;
