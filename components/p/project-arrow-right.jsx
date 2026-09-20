import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqvyd9bag.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqvyd9bag"/>`,
		"fallback": "ix:project-arrow-right",
	});
}

export default Component;
