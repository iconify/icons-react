import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqqpqccos.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqqpqccos"/>`,
		"fallback": "lsicon:place-order-outline",
	});
}

export default Component;
