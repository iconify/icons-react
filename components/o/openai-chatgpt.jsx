import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awg1bybys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awg1bybys"/>`,
		"fallback": "thesvg-color:openai-chatgpt",
	});
}

export default Component;
