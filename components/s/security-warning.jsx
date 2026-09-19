import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k93ultqjc.css';
import '../../css/b/bj07x890n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k93ultqjc"/><path class="bj07x890n"/></g>`,
		"fallback": "hugeicons:security-warning",
	});
}

export default Component;
