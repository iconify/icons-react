import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a2-6c9lfp.css';
import '../../css/t/tzz-awbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a2-6c9lfp"/><path class="tzz-awbgj"/></g>`,
		"fallback": "solar:screencast-2-bold",
	});
}

export default Component;
