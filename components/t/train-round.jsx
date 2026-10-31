import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6f7rzbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6f7rzbms"/>`,
		"fallback": "coolicons:train-round",
	});
}

export default Component;
