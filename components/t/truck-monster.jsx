import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nahkdubxs.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nahkdubxs"/>`,
		"fallback": "fa6-solid:truck-monster",
	});
}

export default Component;
