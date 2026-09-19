import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wp_jzqmmf.css';
import '../../css/c/cuqupg4dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="wp_jzqmmf"/><path class="cuqupg4dq"/></g>`,
		"fallback": "hugeicons:mask-theater-02",
	});
}

export default Component;
