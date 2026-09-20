import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek2c01bmu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek2c01bmu"/>`,
		"fallback": "oui:reporter",
	});
}

export default Component;
