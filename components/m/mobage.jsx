import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7rw1rb7e.css';

const viewBox = {"width":700,"height":740};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7rw1rb7e"/>`,
		"fallback": "ls:mobage",
	});
}

export default Component;
