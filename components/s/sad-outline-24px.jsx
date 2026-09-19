import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xdqd7gb2y.css';
import '../../css/c/cgri5gdtm.css';
import '../../css/z/zso2mq8uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xdqd7gb2y"/><path clip-rule="evenodd" class="cgri5gdtm"/><path clip-rule="evenodd" class="zso2mq8uq"/></g>`,
		"fallback": "healthicons:sad-outline-24px",
	});
}

export default Component;
