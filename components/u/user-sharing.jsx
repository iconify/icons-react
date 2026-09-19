import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vsiqwbc2m.css';
import '../../css/e/e58-aeear.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vsiqwbc2m"/><path class="e58-aeear"/></g>`,
		"fallback": "hugeicons:user-sharing",
	});
}

export default Component;
