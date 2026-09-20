import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keq10ib-x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keq10ib-x"/>`,
		"fallback": "rivet-icons:neutral-solid",
	});
}

export default Component;
