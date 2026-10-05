import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/t9c8189eo.css';
import '../../css/j/jdpv_ysea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="t9c8189eo"/><path class="jdpv_ysea"/></g>`,
		"fallback": "matita:tag",
	});
}

export default Component;
