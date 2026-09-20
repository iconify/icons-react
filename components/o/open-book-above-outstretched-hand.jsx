import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e49y6d30i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e49y6d30i"/>`,
		"fallback": "pinhead:open-book-above-outstretched-hand",
	});
}

export default Component;
