import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax-zp5bwg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax-zp5bwg"/>`,
		"fallback": "streamline:pen-draw",
	});
}

export default Component;
