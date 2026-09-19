import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljj02nc5n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljj02nc5n"/>`,
		"fallback": "famicons:key-outline",
	});
}

export default Component;
