import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcblw9b_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcblw9b_f"/>`,
		"fallback": "mingcute:video-ai-line",
	});
}

export default Component;
