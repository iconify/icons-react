import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9clm6bik.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9clm6bik"/>`,
		"fallback": "fa-solid:laptop",
	});
}

export default Component;
