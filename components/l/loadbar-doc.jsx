import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zdi-psb6y.css';
import '../../css/l/lj94l55xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zdi-psb6y"/><path class="lj94l55xd"/></g>`,
		"fallback": "gg:loadbar-doc",
	});
}

export default Component;
