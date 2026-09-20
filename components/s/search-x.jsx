import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otp0p-b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otp0p-b9i"/>`,
		"fallback": "keyline-icons:search-x",
	});
}

export default Component;
