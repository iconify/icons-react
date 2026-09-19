import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/argz2yb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="argz2yb_i"/>`,
		"fallback": "iconamoon:number-6-bold",
	});
}

export default Component;
