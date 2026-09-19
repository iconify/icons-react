import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl-6btjno.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl-6btjno"/>`,
		"fallback": "ion:ios-color-filter-outline",
	});
}

export default Component;
