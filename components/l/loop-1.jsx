import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt5lhvbav.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt5lhvbav"/>`,
		"fallback": "streamline:loop-1",
	});
}

export default Component;
