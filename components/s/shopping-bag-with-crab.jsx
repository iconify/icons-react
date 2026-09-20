import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8ksgsa2x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8ksgsa2x"/>`,
		"fallback": "pinhead:shopping-bag-with-crab",
	});
}

export default Component;
