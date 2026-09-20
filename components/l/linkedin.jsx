import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/ko3eesmxm.css';
import '../../css/m/mk19szlwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ko3eesmxm"/><path class="mk19szlwz"/></g>`,
		"fallback": "mynaui:linkedin",
	});
}

export default Component;
