import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgwvj6b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgwvj6b2r"/>`,
		"fallback": "uil:left-to-right-text-direction",
	});
}

export default Component;
