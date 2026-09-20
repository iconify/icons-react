import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d30ixlj3o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d30ixlj3o"/>`,
		"fallback": "lsicon:rail-outline",
	});
}

export default Component;
