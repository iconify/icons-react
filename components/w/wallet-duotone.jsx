import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sr9tu8sef.css';
import '../../css/s/spmundq3k.css';
import '../../css/w/wd5g6kh7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sr9tu8sef"/><path clip-rule="evenodd" class="spmundq3k"/><path class="wd5g6kh7j"/></g>`,
		"fallback": "reicon:wallet-duotone",
	});
}

export default Component;
