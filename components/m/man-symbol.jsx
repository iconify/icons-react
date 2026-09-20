import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5e6vsrrs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5e6vsrrs"/>`,
		"fallback": "streamline:man-symbol",
	});
}

export default Component;
