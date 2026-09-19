import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mxlg9-bhm.css';
import '../../css/x/x22b0r5zz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mxlg9-bhm"/><path class="x22b0r5zz"/></g>`,
		"fallback": "gg:path-trim",
	});
}

export default Component;
