import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvzhw7i5u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvzhw7i5u"/>`,
		"fallback": "fa7-solid:location",
	});
}

export default Component;
