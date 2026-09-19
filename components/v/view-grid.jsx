import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk8lclvhg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk8lclvhg"/>`,
		"fallback": "heroicons-solid:view-grid",
	});
}

export default Component;
