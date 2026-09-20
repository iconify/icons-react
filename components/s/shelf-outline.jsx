import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdggi4wlu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdggi4wlu"/>`,
		"fallback": "lsicon:shelf-outline",
	});
}

export default Component;
