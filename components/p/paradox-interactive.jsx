import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7pdk_b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7pdk_b2l"/>`,
		"fallback": "thesvg-color:paradox-interactive",
	});
}

export default Component;
