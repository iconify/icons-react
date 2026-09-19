import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anw272b2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anw272b2n"/>`,
		"fallback": "heroicons:viewfinder-circle-16-solid",
	});
}

export default Component;
