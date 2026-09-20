import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jatd2sbse.css';
import '../../css/t/tgxulxmfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jatd2sbse"/><path class="tgxulxmfw"/></g>`,
		"fallback": "nrk:open-external",
	});
}

export default Component;
