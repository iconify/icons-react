import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssww8xbdc.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssww8xbdc"/>`,
		"fallback": "lineicons:lineicons-symbol-alt-2",
	});
}

export default Component;
