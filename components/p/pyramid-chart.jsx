import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0f47ac3t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0f47ac3t"/>`,
		"fallback": "vaadin:pyramid-chart",
	});
}

export default Component;
