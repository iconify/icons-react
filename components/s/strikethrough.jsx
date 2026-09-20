import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iliff2b5t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iliff2b5t"/>`,
		"fallback": "radix-icons:strikethrough",
	});
}

export default Component;
