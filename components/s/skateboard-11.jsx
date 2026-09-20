import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-4_k_y0r.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-4_k_y0r"/>`,
		"fallback": "maki:skateboard-11",
	});
}

export default Component;
