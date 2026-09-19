import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4p7r1b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u4p7r1b0u"/>`,
		"fallback": "iconamoon:sign-minus-circle-fill",
	});
}

export default Component;
