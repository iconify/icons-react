import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uspk1ccev.css';
import '../../css/a/aao2npbao.css';
import '../../css/n/nja63b-rv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uspk1ccev"/><path class="aao2npbao"/><path class="nja63b-rv"/></g>`,
		"fallback": "mynaui:user-square-solid",
	});
}

export default Component;
