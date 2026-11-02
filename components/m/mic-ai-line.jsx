import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs5be5bek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs5be5bek"/>`,
		"fallback": "mingcute:mic-ai-line",
	});
}

export default Component;
