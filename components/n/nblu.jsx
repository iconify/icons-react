import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccfj3dt4e.css';
import '../../css/g/gps6u6bmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccfj3dt4e"/><path class="gps6u6bmq"/>`,
		"fallback": "token:nblu",
	});
}

export default Component;
