import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er-mwtbxn.css';
import '../../css/c/cflr1ab0i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er-mwtbxn"/><path class="cflr1ab0i"/>`,
		"fallback": "vaadin:minus-square-o",
	});
}

export default Component;
