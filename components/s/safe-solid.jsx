import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/attrxkfcz.css';
import '../../css/u/ue4njhcbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="attrxkfcz"/><path class="ue4njhcbi"/></g>`,
		"fallback": "iconaut:safe-solid",
	});
}

export default Component;
