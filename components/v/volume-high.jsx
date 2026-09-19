import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb94sgb1y.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb94sgb1y"/>`,
		"fallback": "icomoon-free:volume-high",
	});
}

export default Component;
