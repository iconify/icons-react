import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us-21_hyf.css';
import '../../css/p/p-8ny1bzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us-21_hyf"/><path class="p-8ny1bzh"/>`,
		"fallback": "mingcute:video-line",
	});
}

export default Component;
