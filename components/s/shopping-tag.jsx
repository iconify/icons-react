import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz7nzvb3q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gz7nzvb3q"/>`,
		"fallback": "streamline-block:shopping-tag",
	});
}

export default Component;
