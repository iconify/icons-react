import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2buuwb3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2buuwb3h"/>`,
		"fallback": "fa6-solid:sliders",
	});
}

export default Component;
