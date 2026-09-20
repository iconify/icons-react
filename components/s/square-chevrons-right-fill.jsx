import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfyy2kbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfyy2kbzp"/>`,
		"fallback": "keyline-icons:square-chevrons-right-fill",
	});
}

export default Component;
