import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvv6vdecf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvv6vdecf"/>`,
		"fallback": "vaadin:plus-circle",
	});
}

export default Component;
