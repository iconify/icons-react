import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l201mbccu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l201mbccu"/>`,
		"fallback": "streamline-color:subtract-1",
	});
}

export default Component;
