import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl-87t-9d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl-87t-9d"/>`,
		"fallback": "temaki:trolleybus",
	});
}

export default Component;
