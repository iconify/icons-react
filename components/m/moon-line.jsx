import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1y8du8-e.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 w1y8du8-e"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:moon-line",
	});
}

export default Component;
