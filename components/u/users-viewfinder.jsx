import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogctq8daa.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogctq8daa"/>`,
		"fallback": "fa6-solid:users-viewfinder",
	});
}

export default Component;
