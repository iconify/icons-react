import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm3w5dbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm3w5dbrf"/>`,
		"fallback": "thesvg-color:oppo",
	});
}

export default Component;
