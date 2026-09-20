import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je7s64bek.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je7s64bek"/>`,
		"fallback": "radix-icons:text",
	});
}

export default Component;
