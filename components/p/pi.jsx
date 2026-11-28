import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5sasxv5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5sasxv5y"/>`,
		"fallback": "noviair:pi",
	});
}

export default Component;
