import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh-ld3xeb.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh-ld3xeb"/>`,
		"fallback": "lineicons:lineicons-alt",
	});
}

export default Component;
