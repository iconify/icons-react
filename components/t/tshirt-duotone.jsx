import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rv_evhb3i.css';
import '../../css/e/ekhf0ozpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rv_evhb3i"/><path class="ekhf0ozpp"/></g>`,
		"fallback": "reicon:tshirt-duotone",
	});
}

export default Component;
