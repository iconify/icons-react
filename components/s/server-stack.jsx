import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mn8hdvbac.css';
import '../../css/g/gw4m_pbgb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mn8hdvbac"/><path clip-rule="evenodd" class="gw4m_pbgb"/></g>`,
		"fallback": "heroicons-solid:server-stack",
	});
}

export default Component;
