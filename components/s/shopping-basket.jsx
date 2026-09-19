import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o--vv303e.css';

const viewBox = {"width":472,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o--vv303e"/>`,
		"fallback": "zmdi:shopping-basket",
	});
}

export default Component;
