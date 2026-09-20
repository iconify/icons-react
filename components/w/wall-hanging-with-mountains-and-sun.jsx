import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk8qblmxx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk8qblmxx"/>`,
		"fallback": "pinhead:wall-hanging-with-mountains-and-sun",
	});
}

export default Component;
