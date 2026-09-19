import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cseet96gg.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cseet96gg"/>`,
		"fallback": "fa-solid:vial",
	});
}

export default Component;
