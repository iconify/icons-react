import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u2tevccak.css';
import '../../css/x/x62iz2bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u2tevccak"/><path class="x62iz2bto"/></g>`,
		"fallback": "coolicons:sofa-bulk-round",
	});
}

export default Component;
