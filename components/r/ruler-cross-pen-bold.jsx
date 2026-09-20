import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ijceuubyb.css';
import '../../css/c/c611n2bdn.css';
import '../../css/m/mv8ixyb5q.css';
import '../../css/m/m_oo3jbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ijceuubyb"/><path class="c611n2bdn"/><path class="mv8ixyb5q"/><path class="m_oo3jbvw"/></g>`,
		"fallback": "solar:ruler-cross-pen-bold",
	});
}

export default Component;
