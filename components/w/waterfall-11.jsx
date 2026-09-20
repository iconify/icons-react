import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxq6f4b9e.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxq6f4b9e"/>`,
		"fallback": "maki:waterfall-11",
	});
}

export default Component;
