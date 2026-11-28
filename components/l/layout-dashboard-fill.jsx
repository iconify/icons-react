import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wctd4xbjq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wctd4xbjq"/>`,
		"fallback": "pullo:layout-dashboard-fill",
	});
}

export default Component;
