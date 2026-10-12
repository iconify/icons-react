import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdqfj0vsj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdqfj0vsj"/>`,
		"fallback": "garden:pencil-fill-20",
	});
}

export default Component;
