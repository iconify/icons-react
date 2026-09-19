import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1yh6f2dv.css';

const viewBox = {"width":717,"height":766};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1yh6f2dv"/>`,
		"fallback": "ls:search",
	});
}

export default Component;
