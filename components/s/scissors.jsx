import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj4cr7bwy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj4cr7bwy"/>`,
		"fallback": "bi:scissors",
	});
}

export default Component;
