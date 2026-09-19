import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1b2lsb1n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1b2lsb1n"/>`,
		"fallback": "bi:skip-end-fill",
	});
}

export default Component;
