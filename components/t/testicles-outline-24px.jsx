import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b0160hb9u.css';
import '../../css/z/zu4yhacuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b0160hb9u"/><path class="zu4yhacuo"/></g>`,
		"fallback": "healthicons:testicles-outline-24px",
	});
}

export default Component;
