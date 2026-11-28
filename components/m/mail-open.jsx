import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvmdjkbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvmdjkbce"/>`,
		"fallback": "noviair-light:mail-open",
	});
}

export default Component;
