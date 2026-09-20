import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rd39nqbvy.css';
import '../../css/o/op837nbch.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rd39nqbvy"/><path clip-rule="evenodd" class="op837nbch"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:no-entry-off",
	});
}

export default Component;
