import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4tw58c5s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4tw58c5s"/>`,
		"fallback": "radix-icons:link-1",
	});
}

export default Component;
