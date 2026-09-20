import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce0dacbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ce0dacbix"/>`,
		"fallback": "keyline-icons:square-caret-up-fill",
	});
}

export default Component;
