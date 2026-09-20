import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6c-fwi1m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6c-fwi1m"/>`,
		"fallback": "streamline-flex-color:scanner-bar-code",
	});
}

export default Component;
