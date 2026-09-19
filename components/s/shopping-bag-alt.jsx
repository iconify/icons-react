import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnrhh6btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnrhh6btp"/>`,
		"fallback": "bxs:shopping-bag-alt",
	});
}

export default Component;
