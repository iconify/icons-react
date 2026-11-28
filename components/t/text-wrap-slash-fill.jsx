import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsmaewb7i.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsmaewb7i"/>`,
		"fallback": "pullo:text-wrap-slash-fill",
	});
}

export default Component;
