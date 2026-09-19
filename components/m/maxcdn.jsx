import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elzab3b5y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elzab3b5y"/>`,
		"fallback": "cib:maxcdn",
	});
}

export default Component;
