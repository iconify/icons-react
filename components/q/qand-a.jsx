import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svd0sybzj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svd0sybzj"/>`,
		"fallback": "fluent-mdl2:qand-a",
	});
}

export default Component;
