import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q37h1n4jn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q37h1n4jn"/>`,
		"fallback": "bi:type-h5",
	});
}

export default Component;
