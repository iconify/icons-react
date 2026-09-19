import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9o-uhbig.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9o-uhbig"/>`,
		"fallback": "fa-regular:star-half",
	});
}

export default Component;
