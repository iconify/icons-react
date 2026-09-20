import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dpgmsccqo.css';
import '../../css/d/d1xyvabzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dpgmsccqo"/><path class="d1xyvabzq"/></g>`,
		"fallback": "reicon:pen-remove-filled",
	});
}

export default Component;
