import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2441nawc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2441nawc"/>`,
		"fallback": "fa7-solid:truck-arrow-right",
	});
}

export default Component;
