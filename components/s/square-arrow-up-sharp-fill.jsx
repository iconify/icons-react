import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4kdf1bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4kdf1bho"/>`,
		"fallback": "keyline-icons:square-arrow-up-sharp-fill",
	});
}

export default Component;
