import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j31ia0zva.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j31ia0zva"/>`,
		"fallback": "pullo:sidebar-simple-open-light",
	});
}

export default Component;
