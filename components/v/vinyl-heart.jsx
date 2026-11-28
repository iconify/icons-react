import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehn1vmb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehn1vmb_l"/>`,
		"fallback": "noviair-light:vinyl-heart",
	});
}

export default Component;
