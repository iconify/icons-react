import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8x83qxqh.css';
import '../../css/n/nv03s4baq.css';
import '../../css/v/v3eljxu7t.css';
import '../../css/t/t--i3vd_t.css';
import '../../css/l/lhl5gzgha.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u8x83qxqh"/><path clip-rule="evenodd" class="nv03s4baq"/><path class="v3eljxu7t"/><path clip-rule="evenodd" class="t--i3vd_t"/><path class="lhl5gzgha"/></g>`,
		"fallback": "healthicons:pregnant-2426w",
	});
}

export default Component;
