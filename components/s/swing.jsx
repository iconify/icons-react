import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p__2-wbwf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p__2-wbwf"/>`,
		"fallback": "temaki:swing",
	});
}

export default Component;
