import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9uj8bd6e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9uj8bd6e"/>`,
		"fallback": "ooui:next-rtl",
	});
}

export default Component;
