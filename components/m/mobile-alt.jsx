import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-xywxbpo.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-xywxbpo"/>`,
		"fallback": "fa-solid:mobile-alt",
	});
}

export default Component;
