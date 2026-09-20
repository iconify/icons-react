import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj2vzjbbv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fj2vzjbbv"/>`,
		"fallback": "streamline:module-puzzle-1-remix",
	});
}

export default Component;
