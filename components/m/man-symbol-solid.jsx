import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnvm2tb2l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vnvm2tb2l"/>`,
		"fallback": "streamline:man-symbol-solid",
	});
}

export default Component;
