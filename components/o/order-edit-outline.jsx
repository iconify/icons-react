import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu25hacoj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu25hacoj"/>`,
		"fallback": "lsicon:order-edit-outline",
	});
}

export default Component;
