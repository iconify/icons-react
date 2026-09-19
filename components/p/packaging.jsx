import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mu4bqfbiz.css';
import '../../css/q/qy1aa2baa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mu4bqfbiz"/><path class="qy1aa2baa"/></g>`,
		"fallback": "hugeicons:packaging",
	});
}

export default Component;
