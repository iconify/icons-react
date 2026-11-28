import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7233x-8q.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7233x-8q"/>`,
		"fallback": "pullo:layout-dashboard-bold",
	});
}

export default Component;
