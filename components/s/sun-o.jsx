import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck7oek4jj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck7oek4jj"/>`,
		"fallback": "vaadin:sun-o",
	});
}

export default Component;
