import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uzpoxesfd.css';
import '../../css/f/f3m_d-b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary uzpoxesfd"/><path class="f3m_d-b8p primary"/></g>`,
		"fallback": "iconaut:piano-duotone",
	});
}

export default Component;
