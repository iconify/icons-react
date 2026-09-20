import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2w5x-76v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2w5x-76v"/>`,
		"fallback": "roentgen:vending-pack",
	});
}

export default Component;
