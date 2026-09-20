import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn3czrb9y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn3czrb9y"/>`,
		"fallback": "maki:restaurant-bbq",
	});
}

export default Component;
