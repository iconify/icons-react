import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4kipac5d.css';
import '../../css/x/x603n5b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p4kipac5d"/><path clip-rule="evenodd" class="x603n5b9i"/></g>`,
		"fallback": "reicon:mention-circle-filled",
	});
}

export default Component;
