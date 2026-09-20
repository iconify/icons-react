import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj2re3b1o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj2re3b1o"/>`,
		"fallback": "radix-icons:sewing-pin",
	});
}

export default Component;
