import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zf9e50b3r.css';
import '../../css/b/bohkq6hmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zf9e50b3r"/><path class="bohkq6hmd"/></g>`,
		"fallback": "majesticons:user-add-line",
	});
}

export default Component;
