import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_hs7szqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_hs7szqz"/>`,
		"fallback": "keyline-icons:smartphone-x-sharp",
	});
}

export default Component;
