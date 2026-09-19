import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3nkh24xn.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3nkh24xn"/>`,
		"fallback": "foundation:social-zerply",
	});
}

export default Component;
