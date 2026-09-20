import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z0gvdbcsh.css';
import '../../css/y/ywbhn9b9n.css';
import '../../css/q/qkeoc8bxr.css';
import '../../css/j/jluiz65gu.css';
import '../../css/d/dc6xwg1bd.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z0gvdbcsh"/><path clip-rule="evenodd" class="ywbhn9b9n"/><path clip-rule="evenodd" class="qkeoc8bxr"/><path clip-rule="evenodd" class="jluiz65gu"/><path clip-rule="evenodd" class="dc6xwg1bd"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:repeat-off",
	});
}

export default Component;
