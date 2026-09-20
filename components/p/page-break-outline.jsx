import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhqd6abgn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhqd6abgn"/>`,
		"fallback": "teenyicons:page-break-outline",
	});
}

export default Component;
