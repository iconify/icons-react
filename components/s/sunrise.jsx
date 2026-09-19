import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndvb_u1ug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndvb_u1ug"/>`,
		"fallback": "feather:sunrise",
	});
}

export default Component;
