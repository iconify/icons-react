import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvcd_fbtv.css';
import '../../css/d/dw8o1ebsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvcd_fbtv"/><path class="dw8o1ebsq"/></g>`,
		"fallback": "hugeicons:message-square-heart",
	});
}

export default Component;
