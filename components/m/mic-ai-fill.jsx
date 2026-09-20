import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-lk-v-fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-lk-v-fe"/>`,
		"fallback": "mingcute:mic-ai-fill",
	});
}

export default Component;
