import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk40d6bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk40d6bba"/>`,
		"fallback": "prime:sort-alpha-alt-up",
	});
}

export default Component;
