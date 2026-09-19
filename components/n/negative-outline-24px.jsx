import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hiy9bxh1i.css';
import '../../css/z/zso2mq8uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hiy9bxh1i"/><path clip-rule="evenodd" class="zso2mq8uq"/></g>`,
		"fallback": "healthicons:negative-outline-24px",
	});
}

export default Component;
