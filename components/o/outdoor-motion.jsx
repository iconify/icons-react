import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsdz9kqpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsdz9kqpk"/>`,
		"fallback": "cbi:outdoor-motion",
	});
}

export default Component;
