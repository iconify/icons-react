import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vt5xuxbna.css';
import '../../css/a/abw_b3pdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vt5xuxbna"/><path class="abw_b3pdm"/></g>`,
		"fallback": "griddy-icons:smoke-detector",
	});
}

export default Component;
