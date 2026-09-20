import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yq_r6oice.css';
import '../../css/z/z63i4ocyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yq_r6oice"/><path class="z63i4ocyp"/></g>`,
		"fallback": "solar:screen-share-bold",
	});
}

export default Component;
