import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnm0peb1p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnm0peb1p"/>`,
		"fallback": "streamline:screen-broadcast",
	});
}

export default Component;
