import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn0_a_b2q.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn0_a_b2q"/>`,
		"fallback": "fa-brands:qq",
	});
}

export default Component;
