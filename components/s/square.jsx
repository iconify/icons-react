import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znpy9zbqi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znpy9zbqi"/>`,
		"fallback": "radix-icons:square",
	});
}

export default Component;
