import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/di8dd7b4y.css';
import '../../css/r/rwxzb1bkv.css';
import '../../css/x/x3bxksq_t.css';
import '../../css/d/dfmjv0mrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="di8dd7b4y"/><path class="rwxzb1bkv wm-shadow"/><path class="x3bxksq_t"/><path class="dfmjv0mrp"/></g>`,
		"fallback": "withicons:music-2-engrave",
	});
}

export default Component;
