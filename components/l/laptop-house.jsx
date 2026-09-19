import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc-pl27ds.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc-pl27ds"/>`,
		"fallback": "fa-solid:laptop-house",
	});
}

export default Component;
