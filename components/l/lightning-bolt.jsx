import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cimb_3brr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cimb_3brr"/>`,
		"fallback": "at-icons:lightning-bolt",
	});
}

export default Component;
