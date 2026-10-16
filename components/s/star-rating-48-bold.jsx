import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgjq70q0g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgjq70q0g"/>`,
		"fallback": "energy-icons:star-rating-48-bold",
	});
}

export default Component;
