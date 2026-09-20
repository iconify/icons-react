import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbe_w6b4m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbe_w6b4m"/>`,
		"fallback": "pinhead:nine-point-star-outline-on-square",
	});
}

export default Component;
