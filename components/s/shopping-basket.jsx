import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itrkz7s2c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itrkz7s2c"/>`,
		"fallback": "streamline-block:shopping-basket",
	});
}

export default Component;
