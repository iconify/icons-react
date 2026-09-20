import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi0yuo35w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fi0yuo35w"/>`,
		"fallback": "pajamas:monitor",
	});
}

export default Component;
