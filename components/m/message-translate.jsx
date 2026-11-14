import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cqjiytbcf.css';
import '../../css/k/k0ydwtsuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cqjiytbcf"/><path class="k0ydwtsuz"/></g>`,
		"fallback": "hugeicons:message-translate",
	});
}

export default Component;
