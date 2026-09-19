import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac9dv2y0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac9dv2y0h"/>`,
		"fallback": "cbi:telegram",
	});
}

export default Component;
