import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-fl9tbbe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-fl9tbbe"/>`,
		"fallback": "carbon:user-favorite-alt",
	});
}

export default Component;
