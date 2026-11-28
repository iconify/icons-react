import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ikynlpb2c.css';
import '../../css/z/zx-jk7omd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ikynlpb2c secondary"/><path class="primary zx-jk7omd"/></g>`,
		"fallback": "iconaut:layout-bento-duotone",
	});
}

export default Component;
