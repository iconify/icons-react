import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qcee3jben.css';
import '../../css/u/umlomk3tx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qcee3jben"/><path class="umlomk3tx"/></g>`,
		"fallback": "reicon:map-arrow-up-duotone",
	});
}

export default Component;
