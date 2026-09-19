import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo29-qb6t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo29-qb6t"/>`,
		"fallback": "bi:usb-mini-fill",
	});
}

export default Component;
