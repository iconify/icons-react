import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcn9d8shr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcn9d8shr"/>`,
		"fallback": "pinhead:people-in-car",
	});
}

export default Component;
