import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfi7cmb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfi7cmb8r"/>`,
		"fallback": "ri:user-heart-line",
	});
}

export default Component;
