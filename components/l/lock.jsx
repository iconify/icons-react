import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwh9o9uom.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwh9o9uom"/>`,
		"fallback": "simple-line-icons:lock",
	});
}

export default Component;
