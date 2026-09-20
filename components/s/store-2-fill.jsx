import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7-p5eb0s.css';
import '../../css/e/e2w581g2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s7-p5eb0s"/><path class="e2w581g2m"/>`,
		"fallback": "mingcute:store-2-fill",
	});
}

export default Component;
