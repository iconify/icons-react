import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roc7g_b5t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roc7g_b5t"/>`,
		"fallback": "vaadin:step-forward",
	});
}

export default Component;
