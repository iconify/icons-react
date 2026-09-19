import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_l44cbhl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_l44cbhl"/>`,
		"fallback": "at-icons:slider-joint",
	});
}

export default Component;
