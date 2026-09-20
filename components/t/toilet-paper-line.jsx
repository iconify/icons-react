import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bobuj8b3z.css';
import '../../css/n/nh6el8bqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bobuj8b3z"/><ellipse class="nh6el8bqh"/>`,
		"fallback": "mingcute:toilet-paper-line",
	});
}

export default Component;
