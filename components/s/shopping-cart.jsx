import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt39wr83w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt39wr83w"/>`,
		"fallback": "pinhead:shopping-cart",
	});
}

export default Component;
