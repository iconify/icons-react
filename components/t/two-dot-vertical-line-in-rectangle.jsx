import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgso04boy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgso04boy"/>`,
		"fallback": "pinhead:two-dot-vertical-line-in-rectangle",
	});
}

export default Component;
