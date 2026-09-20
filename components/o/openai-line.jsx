import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig0u6q-wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig0u6q-wi"/>`,
		"fallback": "ri:openai-line",
	});
}

export default Component;
