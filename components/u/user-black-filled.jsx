import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5ozg169z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j5ozg169z"/>`,
		"fallback": "lsicon:user-black-filled",
	});
}

export default Component;
