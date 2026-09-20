import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxro7nbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxro7nbve"/>`,
		"fallback": "keyline-icons:play-duotone",
	});
}

export default Component;
