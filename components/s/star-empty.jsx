import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlsrlyb1o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlsrlyb1o"/>`,
		"fallback": "icomoon-free:star-empty",
	});
}

export default Component;
