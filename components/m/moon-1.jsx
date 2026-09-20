import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6-2urb7w.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6-2urb7w"/>`,
		"fallback": "wi:moon-1",
	});
}

export default Component;
