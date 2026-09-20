import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tpfdgiz5d.css';
import '../../css/a/a1zx_pbxi.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="tpfdgiz5d"/><path class="a1zx_pbxi"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:paperclip-off",
	});
}

export default Component;
