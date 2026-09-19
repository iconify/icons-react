import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj3otwbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj3otwbjd"/>`,
		"fallback": "boxicons:laurel-wreath-left",
	});
}

export default Component;
