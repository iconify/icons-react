import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3fptrb1o.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3fptrb1o"/>`,
		"fallback": "fa-solid:user-graduate",
	});
}

export default Component;
