import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bp-a3reyd.css';
import '../../css/v/vl81dfb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bp-a3reyd"/><path class="vl81dfb2v"/></g>`,
		"fallback": "solar:pen-bold",
	});
}

export default Component;
