import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8t6p8bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m8t6p8bru"/>`,
		"fallback": "keyline-icons:square-align-offset-right-sharp-fill",
	});
}

export default Component;
