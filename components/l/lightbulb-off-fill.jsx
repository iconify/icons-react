import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5acoacwc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5acoacwc"/>`,
		"fallback": "bi:lightbulb-off-fill",
	});
}

export default Component;
