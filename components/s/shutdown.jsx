import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_t-t1bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_t-t1bub"/>`,
		"fallback": "ix:shutdown",
	});
}

export default Component;
