import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt7r-bbrs.css';

const viewBox = {"width":512,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt7r-bbrs"/>`,
		"fallback": "file-icons:pyret",
	});
}

export default Component;
