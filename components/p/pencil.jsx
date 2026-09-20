import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylq7u89oc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylq7u89oc"/>`,
		"fallback": "rivet-icons:pencil",
	});
}

export default Component;
