import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8o30jhxi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8o30jhxi"/>`,
		"fallback": "streamline:interface-arrows-right-arrow-right-keyboard",
	});
}

export default Component;
