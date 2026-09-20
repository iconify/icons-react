import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3z3l3b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3z3l3b7u"/>`,
		"fallback": "weui:play2-outlined",
	});
}

export default Component;
