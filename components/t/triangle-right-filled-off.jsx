import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a47qx_bzi.css';
import '../../css/w/w2yrdejhq.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a47qx_bzi"/><path clip-rule="evenodd" class="w2yrdejhq"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:triangle-right-filled-off",
	});
}

export default Component;
