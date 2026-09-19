import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3si62x3n.css';

const viewBox = {"width":551,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3si62x3n"/>`,
		"fallback": "ls:unlock",
	});
}

export default Component;
