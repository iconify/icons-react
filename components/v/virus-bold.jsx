import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tw25m_bzl.css';
import '../../css/r/r4lw3u0et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tw25m_bzl"/><path class="r4lw3u0et"/></g>`,
		"fallback": "solar:virus-bold",
	});
}

export default Component;
