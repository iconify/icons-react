import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jqrkucbre.css';
import '../../css/d/dodpysb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jqrkucbre"/><path class="dodpysb3g"/></g>`,
		"fallback": "solar:shop-bold",
	});
}

export default Component;
