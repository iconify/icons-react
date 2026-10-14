import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/w4o0zgypy.css';
import '../../css/l/lrvv_1b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="w4o0zgypy"/><path class="lrvv_1b3t"/></g>`,
		"fallback": "matita:music",
	});
}

export default Component;
