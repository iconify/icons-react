import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo1r5ubvp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo1r5ubvp"/>`,
		"fallback": "qlementine-icons:skip-forward-16",
	});
}

export default Component;
