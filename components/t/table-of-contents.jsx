import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi0m70ttg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi0m70ttg"/>`,
		"fallback": "oui:table-of-contents",
	});
}

export default Component;
