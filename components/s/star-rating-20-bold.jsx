import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdkl37ceg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdkl37ceg"/>`,
		"fallback": "energy-icons:star-rating-20-bold",
	});
}

export default Component;
