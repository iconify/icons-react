import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xa2hfrbrx.css';
import '../../css/w/wbjyenbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xa2hfrbrx"/><path class="wbjyenbnm wm-a"/></g>`,
		"fallback": "withicons:rangoli-pattern",
	});
}

export default Component;
