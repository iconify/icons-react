import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4tqgfbit.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4tqgfbit"/>`,
		"fallback": "pinhead:people-running",
	});
}

export default Component;
