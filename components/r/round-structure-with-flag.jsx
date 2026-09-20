import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5q5vuphz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5q5vuphz"/>`,
		"fallback": "pinhead:round-structure-with-flag",
	});
}

export default Component;
