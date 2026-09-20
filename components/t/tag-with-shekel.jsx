import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/curtq7b_d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="curtq7b_d"/>`,
		"fallback": "pinhead:tag-with-shekel",
	});
}

export default Component;
