import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erv-4vbpa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erv-4vbpa"/>`,
		"fallback": "at-icons:palette",
	});
}

export default Component;
