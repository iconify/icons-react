import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-j0nkb-z.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-j0nkb-z"/>`,
		"fallback": "fa-solid:otter",
	});
}

export default Component;
