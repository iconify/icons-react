import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka1cq2b8o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka1cq2b8o"/>`,
		"fallback": "lsicon:top-align-outline",
	});
}

export default Component;
