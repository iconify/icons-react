import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogta_je5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogta_je5z"/>`,
		"fallback": "iconamoon:sign-plus-minus-bold",
	});
}

export default Component;
