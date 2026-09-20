import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1dh4bbcy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1dh4bbcy"/>`,
		"fallback": "pinhead:shopping-bag-with-leaf",
	});
}

export default Component;
