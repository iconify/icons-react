import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5d79oz8g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5d79oz8g"/>`,
		"fallback": "teenyicons:sort-low-to-high-outline",
	});
}

export default Component;
