import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-cdc3b_b.css';

const viewBox = {"width":895,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-cdc3b_b"/>`,
		"fallback": "whh:psdown",
	});
}

export default Component;
