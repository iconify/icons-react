import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2onhwyey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2onhwyey"/>`,
		"fallback": "noviair-light:mail-heart",
	});
}

export default Component;
