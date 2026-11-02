import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e604t8bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e604t8bfv"/>`,
		"fallback": "mingcute:music-2-ai-line",
	});
}

export default Component;
