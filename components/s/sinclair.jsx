import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6b-56b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6b-56b1l"/>`,
		"fallback": "cbi:sinclair",
	});
}

export default Component;
