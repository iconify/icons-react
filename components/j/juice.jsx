import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw1lpcl0t.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw1lpcl0t"/>`,
		"fallback": "lineicons:juice",
	});
}

export default Component;
