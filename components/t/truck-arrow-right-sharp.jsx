import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arh7qe-ge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arh7qe-ge"/>`,
		"fallback": "keyline-icons:truck-arrow-right-sharp",
	});
}

export default Component;
