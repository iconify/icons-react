import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5i1vx9wz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e5i1vx9wz"/>`,
		"fallback": "lsicon:shopping-bag-filled",
	});
}

export default Component;
