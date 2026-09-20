import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo9hok72z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oo9hok72z"/>`,
		"fallback": "streamline-block:shopping-jewels",
	});
}

export default Component;
