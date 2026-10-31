import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rrhce6uaz.css';
import '../../css/k/k1623nsxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rrhce6uaz"/><path class="k1623nsxf"/></g>`,
		"fallback": "coolicons:settings-alt-bulk-round",
	});
}

export default Component;
