import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m95s_8b-y.css';
import '../../css/h/hx2vhxbuh.css';
import '../../css/q/qfc7fqb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m95s_8b-y"/><path class="hx2vhxbuh"/><path clip-rule="evenodd" class="qfc7fqb6v"/></g>`,
		"fallback": "gg:music-speaker",
	});
}

export default Component;
