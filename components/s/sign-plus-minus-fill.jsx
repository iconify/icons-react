import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nca5e5b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nca5e5b3z"/>`,
		"fallback": "iconamoon:sign-plus-minus-fill",
	});
}

export default Component;
