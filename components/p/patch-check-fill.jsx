import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxdl9zb_k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxdl9zb_k"/>`,
		"fallback": "bi:patch-check-fill",
	});
}

export default Component;
