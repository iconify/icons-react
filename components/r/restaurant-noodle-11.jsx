import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyly-ob3e.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyly-ob3e"/>`,
		"fallback": "maki:restaurant-noodle-11",
	});
}

export default Component;
