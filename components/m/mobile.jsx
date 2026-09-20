import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kwl_xgglj.css';
import '../../css/p/p7e1-xbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kwl_xgglj"/><path clip-rule="evenodd" class="p7e1-xbif"/></g>`,
		"fallback": "reicon:mobile",
	});
}

export default Component;
