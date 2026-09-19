import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9l5ethsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t9l5ethsr"/>`,
		"fallback": "iconamoon:sign-minus-fill",
	});
}

export default Component;
