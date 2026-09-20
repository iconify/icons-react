import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2mqedb_e.css';
import '../../css/z/zhoc7t6lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w2mqedb_e"/><path clip-rule="evenodd" class="zhoc7t6lj"/></g>`,
		"fallback": "reicon:routing-2",
	});
}

export default Component;
