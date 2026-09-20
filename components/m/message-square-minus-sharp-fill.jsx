import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvwaabbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvwaabbap"/>`,
		"fallback": "keyline-icons:message-square-minus-sharp-fill",
	});
}

export default Component;
