import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ycrv7o_lb.css';
import '../../css/h/h97kjdagp.css';
import '../../css/i/itg-c1b2z.css';
import '../../css/n/ncvignbbk.css';
import '../../css/b/bd2_erdbe.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="ycrv7o_lb"/><path class="h97kjdagp"/><path class="itg-c1b2z"/><path class="ncvignbbk"/><path class="bd2_erdbe"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:move-x-off",
	});
}

export default Component;
