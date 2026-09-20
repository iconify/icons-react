import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7qb-gbjk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7qb-gbjk"/>`,
		"fallback": "streamline-flex:shopping-basket-add",
	});
}

export default Component;
