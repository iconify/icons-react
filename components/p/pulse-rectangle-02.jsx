import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v5y5gxn0v.css';
import '../../css/q/q6pxqp6sm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v5y5gxn0v"/><path class="q6pxqp6sm"/></g>`,
		"fallback": "hugeicons:pulse-rectangle-02",
	});
}

export default Component;
