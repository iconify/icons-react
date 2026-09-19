import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-5ur4b_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-5ur4b_x"/>`,
		"fallback": "ion:unlocked",
	});
}

export default Component;
