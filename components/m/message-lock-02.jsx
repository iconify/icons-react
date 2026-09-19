import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/payyopbvb.css';
import '../../css/v/vy2crvbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="payyopbvb"/><path class="vy2crvbhv"/></g>`,
		"fallback": "hugeicons:message-lock-02",
	});
}

export default Component;
