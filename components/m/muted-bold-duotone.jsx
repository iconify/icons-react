import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvkb31bsx.css';
import '../../css/q/qhp9_pb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dvkb31bsx"/><path class="qhp9_pb3v"/></g>`,
		"fallback": "solar:muted-bold-duotone",
	});
}

export default Component;
