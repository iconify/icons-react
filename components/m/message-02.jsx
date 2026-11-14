import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/y-r-x5_vg.css';
import '../../css/f/f3t6n_b9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="y-r-x5_vg"/><path class="f3t6n_b9x"/></g>`,
		"fallback": "hugeicons:message-02",
	});
}

export default Component;
