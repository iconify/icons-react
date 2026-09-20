import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix1u1i3gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix1u1i3gc"/>`,
		"fallback": "keyline-icons:messages-square-sharp-fill",
	});
}

export default Component;
