import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-bv_67hy.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-bv_67hy"/>`,
		"fallback": "fa:pencil",
	});
}

export default Component;
