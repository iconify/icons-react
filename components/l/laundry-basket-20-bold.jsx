import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia51n3hgg.css';
import '../../css/t/tv9ekks-k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia51n3hgg"/><path class="tv9ekks-k"/>`,
		"fallback": "energy-icons:laundry-basket-20-bold",
	});
}

export default Component;
