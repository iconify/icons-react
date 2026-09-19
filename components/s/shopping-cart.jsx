import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1r3f5ojh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1r3f5ojh"/>`,
		"fallback": "at-icons:shopping-cart",
	});
}

export default Component;
