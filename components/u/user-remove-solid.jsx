import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5gmf2d8y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5gmf2d8y"/>`,
		"fallback": "rivet-icons:user-remove-solid",
	});
}

export default Component;
