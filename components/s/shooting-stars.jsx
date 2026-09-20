import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2uq_9q7y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2uq_9q7y"/>`,
		"fallback": "pinhead:shooting-stars",
	});
}

export default Component;
