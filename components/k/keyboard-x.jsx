import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp0xepb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp0xepb8i"/>`,
		"fallback": "noviair:keyboard-x",
	});
}

export default Component;
