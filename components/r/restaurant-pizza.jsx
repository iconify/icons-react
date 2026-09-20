import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqlqe17_x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqlqe17_x"/>`,
		"fallback": "maki:restaurant-pizza",
	});
}

export default Component;
