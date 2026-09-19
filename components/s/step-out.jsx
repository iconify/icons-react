import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q53mcbb0u.css';
import '../../css/x/x8uw2sb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q53mcbb0u"/><path class="x8uw2sb4i"/></g>`,
		"fallback": "hugeicons:step-out",
	});
}

export default Component;
