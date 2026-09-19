import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-zr0lbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c-zr0lbkt"/>`,
		"fallback": "griddy-icons:time-refresh",
	});
}

export default Component;
