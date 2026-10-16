import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg5jh0yog.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg5jh0yog"/>`,
		"fallback": "energy-icons:star-rating-20",
	});
}

export default Component;
