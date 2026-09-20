import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cugntf3hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cugntf3hv"/>`,
		"fallback": "keyline-icons:mic",
	});
}

export default Component;
