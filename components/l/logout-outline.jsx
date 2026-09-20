import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/carmwq-6l.css';
import '../../css/m/mp961hega.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="carmwq-6l"/><path class="mp961hega"/></g>`,
		"fallback": "solar:logout-outline",
	});
}

export default Component;
