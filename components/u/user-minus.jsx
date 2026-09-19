import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to3w6o15e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to3w6o15e"/>`,
		"fallback": "carbon:user-minus",
	});
}

export default Component;
