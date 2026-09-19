import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v817akbgf.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v817akbgf"/>`,
		"fallback": "fa6-solid:water",
	});
}

export default Component;
