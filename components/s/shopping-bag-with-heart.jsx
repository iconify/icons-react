import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9161fbsr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9161fbsr"/>`,
		"fallback": "pinhead:shopping-bag-with-heart",
	});
}

export default Component;
