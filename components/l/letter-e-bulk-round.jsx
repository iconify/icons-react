import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it9b3kbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it9b3kbdf"/>`,
		"fallback": "coolicons:letter-e-bulk-round",
	});
}

export default Component;
