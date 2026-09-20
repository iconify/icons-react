import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofvr46p3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofvr46p3z"/>`,
		"fallback": "majesticons:scroll-text-line",
	});
}

export default Component;
