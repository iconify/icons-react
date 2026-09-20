import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1fas8u7e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1fas8u7e"/>`,
		"fallback": "temaki:railing",
	});
}

export default Component;
