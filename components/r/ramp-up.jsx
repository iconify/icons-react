import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dudf2xb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dudf2xb3w"/>`,
		"fallback": "guidance:ramp-up",
	});
}

export default Component;
