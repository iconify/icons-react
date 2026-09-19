import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p37sy3d-e.css';
import '../../css/t/txzq25bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p37sy3d-e"/><path clip-rule="evenodd" class="txzq25bdo"/></g>`,
		"fallback": "gg:toolbar-right",
	});
}

export default Component;
