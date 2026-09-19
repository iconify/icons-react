import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejwi4yg8o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejwi4yg8o"/>`,
		"fallback": "fa7-solid:plane-circle-xmark",
	});
}

export default Component;
