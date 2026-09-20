import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zse8x-bhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zse8x-bhi"/>`,
		"fallback": "keyline-icons:square-full-fill",
	});
}

export default Component;
