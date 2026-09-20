import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxusbjb8q.css';
import '../../css/y/yrdyw7tff.css';
import '../../css/h/h8auu-0yw.css';
import '../../css/f/fwxnfntjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oxusbjb8q"/><path class="yrdyw7tff"/><path class="h8auu-0yw"/><path class="fwxnfntjo"/></g>`,
		"fallback": "reicon:music-library-duotone",
	});
}

export default Component;
