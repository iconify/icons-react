import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjgs9xbck.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjgs9xbck"/>`,
		"fallback": "la:transgender-alt-solid",
	});
}

export default Component;
