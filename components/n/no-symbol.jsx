import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4b1xmw_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4b1xmw_x"/>`,
		"fallback": "at-icons:no-symbol",
	});
}

export default Component;
