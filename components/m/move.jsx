import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-8_6ui7s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-8_6ui7s"/>`,
		"fallback": "radix-icons:move",
	});
}

export default Component;
