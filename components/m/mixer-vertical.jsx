import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjd0kis-e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjd0kis-e"/>`,
		"fallback": "radix-icons:mixer-vertical",
	});
}

export default Component;
