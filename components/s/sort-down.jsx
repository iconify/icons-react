import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tua0aq4ui.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tua0aq4ui"/>`,
		"fallback": "fa-solid:sort-down",
	});
}

export default Component;
