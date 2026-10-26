import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vr982qbdx.css';
import '../../css/z/zso2mq8uq.css';
import '../../css/v/v7-gd_czh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vr982qbdx"/><path clip-rule="evenodd" class="zso2mq8uq"/><path class="v7-gd_czh"/></g>`,
		"fallback": "healthicons:neutral-24px",
	});
}

export default Component;
