import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtf12vb8t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtf12vb8t"/>`,
		"fallback": "bi:share",
	});
}

export default Component;
