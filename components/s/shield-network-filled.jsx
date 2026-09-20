import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e611xmbua.css';
import '../../css/e/eypv-7b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e611xmbua"/><path clip-rule="evenodd" class="eypv-7b2g"/></g>`,
		"fallback": "reicon:shield-network-filled",
	});
}

export default Component;
