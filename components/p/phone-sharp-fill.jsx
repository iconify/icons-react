import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/augn52bzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="augn52bzw"/>`,
		"fallback": "keyline-icons:phone-sharp-fill",
	});
}

export default Component;
