import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pco3rdo9y.css';
import '../../css/g/gcvv-eb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pco3rdo9y"/><path class="gcvv-eb3a"/></g>`,
		"fallback": "reicon:mouse-square-filled",
	});
}

export default Component;
