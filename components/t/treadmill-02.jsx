import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h3mwhy3oi.css';
import '../../css/u/uzualpolm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h3mwhy3oi"/><path class="uzualpolm"/></g>`,
		"fallback": "hugeicons:treadmill-02",
	});
}

export default Component;
