import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2a39z7-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2a39z7-i"/>`,
		"fallback": "keyline-icons:square-chevron-up-sharp-fill",
	});
}

export default Component;
