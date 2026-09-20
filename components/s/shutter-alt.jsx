import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh9e62b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh9e62b2b"/>`,
		"fallback": "uil:shutter-alt",
	});
}

export default Component;
