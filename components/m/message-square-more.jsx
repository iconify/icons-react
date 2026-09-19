import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvcd_fbtv.css';
import '../../css/f/f5jx-xbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvcd_fbtv"/><path class="f5jx-xbbm"/></g>`,
		"fallback": "hugeicons:message-square-more",
	});
}

export default Component;
