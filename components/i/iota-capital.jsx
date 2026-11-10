import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/edk17f3iz.css';
import '../../css/i/i9fsn5x7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="edk17f3iz"/><path class="i9fsn5x7k"/></g>`,
		"fallback": "matita:iota-capital",
	});
}

export default Component;
