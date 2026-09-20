import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axrk0of4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axrk0of4v"/>`,
		"fallback": "mingcute:sitemap-line",
	});
}

export default Component;
