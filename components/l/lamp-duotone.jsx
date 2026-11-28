import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wocz62b6m.css';
import '../../css/b/bms8v9dxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wocz62b6m"/><path class="bms8v9dxb primary"/></g>`,
		"fallback": "iconaut:lamp-duotone",
	});
}

export default Component;
