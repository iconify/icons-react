import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsc-9cd3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsc-9cd3c"/>`,
		"fallback": "ri:loop-left-ai-fill",
	});
}

export default Component;
