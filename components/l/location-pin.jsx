import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9ncz__nf.css';
import '../../css/u/u-c3y7bmf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9ncz__nf"/><path class="u-c3y7bmf"/>`,
		"fallback": "cil:location-pin",
	});
}

export default Component;
