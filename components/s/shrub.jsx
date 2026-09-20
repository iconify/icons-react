import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8udzeb7h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8udzeb7h"/>`,
		"fallback": "temaki:shrub",
	});
}

export default Component;
