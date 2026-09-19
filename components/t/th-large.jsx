import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-a5-2npd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-a5-2npd"/>`,
		"fallback": "fa-solid:th-large",
	});
}

export default Component;
