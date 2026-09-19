import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd8h6cc5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd8h6cc5u"/>`,
		"fallback": "griddy-icons:soundcloud",
	});
}

export default Component;
