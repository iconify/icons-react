import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh4xk2b5n.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh4xk2b5n"/>`,
		"fallback": "academicons:sci-hub-square",
	});
}

export default Component;
