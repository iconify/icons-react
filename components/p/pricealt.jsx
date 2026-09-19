import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il9y_2n5b.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il9y_2n5b"/>`,
		"fallback": "whh:pricealt",
	});
}

export default Component;
