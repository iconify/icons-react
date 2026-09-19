import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_4qsubgk.css';
import '../../css/o/omqgt0bhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_4qsubgk"/><path class="omqgt0bhf"/>`,
		"fallback": "bx:phone-call",
	});
}

export default Component;
