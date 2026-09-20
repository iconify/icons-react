import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln9qkabwz.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln9qkabwz"/>`,
		"fallback": "maki:natural-11",
	});
}

export default Component;
