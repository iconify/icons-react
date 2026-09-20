import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j35p42bdy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j35p42bdy"/>`,
		"fallback": "simple-line-icons:plane",
	});
}

export default Component;
