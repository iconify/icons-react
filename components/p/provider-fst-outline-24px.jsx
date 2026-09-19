import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xdeua45cu.css';
import '../../css/x/x8z2hxnyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xdeua45cu"/><path class="x8z2hxnyj"/></g>`,
		"fallback": "healthicons:provider-fst-outline-24px",
	});
}

export default Component;
