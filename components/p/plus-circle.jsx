import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juuf-3-cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juuf-3-cu"/>`,
		"fallback": "bxs:plus-circle",
	});
}

export default Component;
