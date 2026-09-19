import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5v9h6b5g.css';

const viewBox = {"width":416,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5v9h6b5g"/>`,
		"fallback": "ps:warning",
	});
}

export default Component;
