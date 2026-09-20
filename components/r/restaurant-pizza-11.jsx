import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3-oi6oyl.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3-oi6oyl"/>`,
		"fallback": "maki:restaurant-pizza-11",
	});
}

export default Component;
