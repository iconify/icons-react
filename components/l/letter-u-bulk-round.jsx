import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4v-ekbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4v-ekbdh"/>`,
		"fallback": "coolicons:letter-u-bulk-round",
	});
}

export default Component;
