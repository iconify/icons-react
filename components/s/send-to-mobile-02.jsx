import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aznwbrbwl.css';
import '../../css/e/e4bl5xbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aznwbrbwl"/><path class="e4bl5xbhi"/></g>`,
		"fallback": "hugeicons:send-to-mobile-02",
	});
}

export default Component;
