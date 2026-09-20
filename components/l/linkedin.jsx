import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_6prabay.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_6prabay"/>`,
		"fallback": "picon:linkedin",
	});
}

export default Component;
