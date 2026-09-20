import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x63qx2bsy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x63qx2bsy"/>`,
		"fallback": "la:neos",
	});
}

export default Component;
