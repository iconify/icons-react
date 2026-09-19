import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6uzq7bol.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6uzq7bol"/>`,
		"fallback": "foundation:share",
	});
}

export default Component;
